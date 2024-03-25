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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUserImage = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const user_service_1 = require("../services/user.service");
const cloudinary_1 = require("../../config/cloudinary");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userService = new user_service_1.UserService();
    try {
        console.log(req.body);
        const user = yield userService.create(Object.assign({}, req.body));
        return res.status(201).json({
            message: "User created succesfully",
            data: user
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userService = new user_service_1.UserService();
    try {
        const users = yield userService.get();
        return res.status(200).json({
            users
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const userService = new user_service_1.UserService();
    try {
        const user = yield userService.find(email);
        return res.status(200).json({
            user
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const userService = new user_service_1.UserService();
    try {
        const user = yield userService.update(email, req.body);
        return res.status(200).json({
            message: "User updated succesfully",
            statuscode: user
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.updateUser = updateUser;
const updateUserImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        return res.status(400).json({ message: 'No se ha cargado ninguna imagen' });
    }
    //   const adaptar = adaptarNameImage(req.file.path)
    // Carga la imagen en Cloudinary
    const cloudinaryResponse = yield (0, cloudinary_1.uploadImage)(req.file.path);
    // Verifica si la carga en Cloudinary fue exitosa
    if (!cloudinaryResponse || !cloudinaryResponse.secure_url) {
        return res.status(500).json({ message: 'Error al cargar la imagen en Cloudinary' });
    }
    const { email } = req.params;
    const userService = new user_service_1.UserService();
    try {
        const user = yield userService.update(email, Object.assign(Object.assign({}, req.body), { profile_image: cloudinaryResponse.secure_url }));
        return res.status(200).json({
            message: "User updated succesfully",
            statuscode: user
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.updateUserImage = updateUserImage;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const userService = new user_service_1.UserService();
    try {
        const user = yield userService.delete(email);
        return res.status(200).json({
            message: "User deleted succesfully",
            statuscode: user
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.deleteUser = deleteUser;
