"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyJWT_1 = require("../middlewares/verifyJWT");
const payment_controller_1 = require("../controllers/payment.controller");
const wompi_controller_1 = require("../controllers/wompi.controller");
const ROUTER = (0, express_1.Router)();
ROUTER.post('/order/create', verifyJWT_1.verifyJWT, payment_controller_1.createOrder); // pendiente de cambiar
//ROUTER.get('/order/success', orderSuccess);
ROUTER.get('/order/failure', (req, res) => {
    console.log("orden creada");
});
ROUTER.get('/order/pending', (req, res) => {
    console.log("orden creada");
});
ROUTER.post('/order/webhook', payment_controller_1.receiveWebhook); // pendiente de cambiar
ROUTER.get('/wompi/merchant', wompi_controller_1.getMerchant);
ROUTER.post('/wompi/payment/create', wompi_controller_1.createPaymentLink);
module.exports = ROUTER;
