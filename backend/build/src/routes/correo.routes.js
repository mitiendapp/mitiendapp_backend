"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const correo_controller_1 = require("../controllers/correo.controller");
const ROUTER = (0, express_1.Router)();
ROUTER.post('/envio', correo_controller_1.envioCorreo);
module.exports = ROUTER;
