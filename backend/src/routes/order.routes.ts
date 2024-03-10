import { Router } from "express";
import { verifyJWT } from "../middlewares/verifyJWT";
import { createOrder, receiveWebhook } from "../controllers/payment.controller";
import { createPaymentLink, getMerchant } from "../controllers/wompi.controller";

const ROUTER = Router();

ROUTER.post('/order/create', verifyJWT, createOrder); // pendiente de cambiar
//ROUTER.get('/order/success', orderSuccess);
ROUTER.get('/order/failure', (req, res) => { // pendiente de cambiar
    console.log("orden creada");
})

ROUTER.get('/order/pending', (req, res) => { // pendiente de cambiar
    console.log("orden creada");

})

ROUTER.post('/order/webhook', receiveWebhook) // pendiente de cambiar

ROUTER.get('/wompi/merchant', getMerchant);
ROUTER.post('/wompi/payment/create', createPaymentLink);

module.exports = ROUTER;
