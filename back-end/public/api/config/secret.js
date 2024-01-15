"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.secret = void 0;
exports.secret = (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : '';
