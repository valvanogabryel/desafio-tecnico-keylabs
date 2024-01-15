"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
const allowedOrigins = [process.env.ORIGIN_URL];
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        // verifica se a origem da solicitação está na lista de origens permitidas
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));
app.use(express_1.default.json());
(0, routes_1.default)(app);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
