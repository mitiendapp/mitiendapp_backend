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
exports.refreshToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const models_1 = require("../models");
const refreshToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cookies = req.cookies;
    if (!(cookies === null || cookies === void 0 ? void 0 : cookies.jwt))
        return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    const user = models_1.default.User.findOne({
        where: {
            refreshToken: refreshToken
        }
    });
    if (!user)
        return res.sendStatus(403);
    jsonwebtoken_1.default.verify(refreshToken, "54321", (err, decoded) => {
        if (err || user.email !== decoded.email)
            return res.sendStatus(403);
        const roles = Object.values(user.roles);
        const accessToken = jsonwebtoken_1.default.sign({
            UserInfo: {
                id: user.id,
                email: user.email,
                roles: roles
            }
        }, "54321", {
            expiresIn: '30d'
        });
        res.json({ accessToken });
    });
});
exports.refreshToken = refreshToken;
