import { Request, Response } from 'express';
import { prisma } from '../db/prismaClient';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { secret } from '../api/config/secret';
import { userSchema } from '../schemas/userSchema';

const ONE_WEEK = 604800000;

export class AuthController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      userSchema.parse({ email, password });

      const user = await prisma.user.findFirst({
        select: { id: true, email: true, password: true },
        where: { email },
      });

      if (!user)
        return res.status(400).json({ error: 'Um ou mais dados incorretos' });

      const passwordsMatch = await bcrypt.compare(password, user.password);

      if (!passwordsMatch)
        return res.status(400).send({ error: 'Um ou mais dados incorretos' });

      const accessToken = jwt.sign(
        {
          email: user.email,
          password: user.password,
        },
        secret,
        {
          expiresIn: '7d',
        }
      );

      res
        .cookie('access_token', accessToken, {
          httpOnly: true,
          sameSite: 'none',
          secure: true,
          maxAge: ONE_WEEK,
        })
        .json({
          auth: true,
          user: {
            email: user.email,
          },
        });
    } catch (err: any) {
      res.status(400).send({
        error: err.message,
      });
    }
  }
}
