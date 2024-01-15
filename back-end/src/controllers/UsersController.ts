import { Request, Response } from 'express';
import { prisma } from '../db/prismaClient';
import bcrypt from 'bcryptjs';
import { userSchema } from '../schemas/userSchema';

export class UsersController {
  // GET
  static async listAllUsers(_: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();

      if (!users)
        return res
          .status(404)
          .json({ message: 'Não há usuários cadastrados...' });

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  // POST
  static async registerUser(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      userSchema.parse({ email, password });

      const existingUser = await prisma.user.findFirst({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ message: 'Email já cadastrado' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      res
        .status(201)
        .json({ message: 'Usuário cadastrado com sucesso!', data: newUser });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}
