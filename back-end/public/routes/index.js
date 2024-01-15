"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = __importDefault(require("./user.router"));
const auth_router_1 = __importDefault(require("./auth.router"));
const routes = (app) => {
    app.use(auth_router_1.default, user_router_1.default);
};
exports.default = routes;
