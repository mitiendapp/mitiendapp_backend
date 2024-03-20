"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const user_controller_1 = require("../controllers/user.controller");
const passport_1 = __importDefault(require("passport"));
const verifyJWT_1 = require("../middlewares/verifyJWT");
const verifyRoles_1 = require("../middlewares/verifyRoles");
const role_list_1 = __importDefault(require("../../config/role.list"));
const multer_1 = __importDefault(require("multer"));
const ROUTER = (0, express_1.Router)();
// ROUTER.post('/user/register', registerUser); // pendiente de cambiar
const upload = (0, multer_1.default)({ dest: './uploads' });
ROUTER.post('/user/login', auth_controller_1.loginUser); // pendiente de cambiar
ROUTER.get('/users', user_controller_1.getUsers);
ROUTER.get('/user/:email', user_controller_1.getUserById);
ROUTER.post('/user/create', user_controller_1.createUser);
ROUTER.post('/user/update/:email', user_controller_1.updateUser);
ROUTER.post('/user/updateImage/:email', upload.single('profile_image'), user_controller_1.updateUserImage);
ROUTER.post('/user/delete/:email', user_controller_1.deleteUser);
ROUTER.get('/test', passport_1.default.authenticate("jwt", { session: true }), auth_controller_1.loginTest); // pendiente de cambiar
ROUTER.get('/test2', verifyJWT_1.verifyJWT, (0, verifyRoles_1.verifyRoles)(role_list_1.default.Admin), auth_controller_1.loginTest); // pendiente de cambiar 
module.exports = ROUTER;
