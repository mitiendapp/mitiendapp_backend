"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("../controllers/client.controller");
const ROUTER = (0, express_1.Router)();
ROUTER.post('/createClient', client_controller_1.createClient); // pendiente de cambiar
module.exports = ROUTER;
