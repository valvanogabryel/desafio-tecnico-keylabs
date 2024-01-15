"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = require("../controllers/UsersController");
const authenticated_1 = __importDefault(require("../middleware/authenticated"));
const router = (0, express_1.Router)();
router.post('/signup', UsersController_1.UsersController.registerUser);
router.get('/users', authenticated_1.default, UsersController_1.UsersController.listAllUsers);
exports.default = router;
