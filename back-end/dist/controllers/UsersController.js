"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const prismaClient_1 = require("../db/prismaClient");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema_1 = require("../schemas/userSchema");
class UsersController {
    // GET
    static listAllUsers(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield prismaClient_1.prisma.user.findMany();
                if (!users)
                    return res
                        .status(404)
                        .json({ message: 'Não há usuários cadastrados...' });
                res.status(200).json(users);
            }
            catch (err) {
                res.status(500).json({ error: err });
            }
        });
    }
    // POST
    static registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                userSchema_1.userSchema.parse({ email, password });
                const existingUser = yield prismaClient_1.prisma.user.findFirst({
                    where: { email },
                });
                if (existingUser) {
                    return res.status(400).json({ message: 'Email já cadastrado' });
                }
                const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
                const newUser = yield prismaClient_1.prisma.user.create({
                    data: {
                        email,
                        password: hashedPassword,
                    },
                });
                res
                    .status(201)
                    .json({ message: 'Usuário cadastrado com sucesso!', data: newUser });
            }
            catch (err) {
                res.status(500).json({ error: err });
            }
        });
    }
}
exports.UsersController = UsersController;
