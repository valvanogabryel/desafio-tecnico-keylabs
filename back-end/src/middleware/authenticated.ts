import { NextFunction, Request, Response } from 'express';
import { secret } from '../api/config/secret';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      userId?: string;
      userEmail?: string;
    }
  }
}

export default async function authenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).send('Token de acesso não foi informado.');

  try {
    jwt.verify(token, secret);
    const { id, email } = (await jwt.decode(token)) as DecodedToken;

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (err) {
    return res.status(403).send('Ocorreu um erro');
  }
}
