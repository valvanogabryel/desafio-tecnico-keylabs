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
exports.AuthController = void 0;
const prismaClient_1 = require("../db/prismaClient");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_1 = require("../api/config/secret");
const userSchema_1 = require("../schemas/userSchema");
const ONE_WEEK = 604800000;
class AuthController {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                userSchema_1.userSchema.parse({ email, password });
                const user = yield prismaClient_1.prisma.user.findFirst({
                    select: { id: true, email: true, password: true },
                    where: { email },
                });
                if (!user)
                    return res.status(400).json({ error: 'Um ou mais dados incorretos' });
                const passwordsMatch = yield bcryptjs_1.default.compare(password, user.password);
                if (!passwordsMatch)
                    return res.status(400).send({ error: 'Um ou mais dados incorretos' });
                const accessToken = jsonwebtoken_1.default.sign({
                    email: user.email,
                    password: user.password,
                }, secret_1.secret, {
                    expiresIn: '7d',
                });
                res
                    .cookie('access_token', accessToken, {
                    httpOnly: true,
                    secure: true,
                    maxAge: ONE_WEEK,
                })
                    .json({
                    auth: true,
                    user: {
                        email: user.email,
                    },
                });
            }
            catch (err) {
                res.status(400).send({
                    error: err.message,
                });
            }
        });
    }
}
exports.AuthController = AuthController;
