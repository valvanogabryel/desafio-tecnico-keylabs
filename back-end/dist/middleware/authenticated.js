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
const secret_1 = require("../api/config/secret");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authenticated(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.cookies.access_token;
        if (!token)
            return res.status(401).send('Token de acesso não foi informado.');
        try {
            jsonwebtoken_1.default.verify(token, secret_1.secret);
            const { id, email } = (yield jsonwebtoken_1.default.decode(token));
            req.userId = id;
            req.userEmail = email;
            return next();
        }
        catch (err) {
            return res.status(403).send('Ocorreu um erro');
        }
    });
}
exports.default = authenticated;
