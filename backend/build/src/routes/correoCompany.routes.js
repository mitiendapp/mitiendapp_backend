"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const correoCompany_controller_1 = require("../controllers/correoCompany.controller");
const ROUTER = (0, express_1.Router)();
ROUTER.post('/envioCompany', correoCompany_controller_1.envioCorreoCompany);
module.exports = ROUTER;
