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
exports.orderPending = exports.orderFailure = exports.orderSuccess = exports.receiveWebhook = exports.createOrder = void 0;
const mercadopago_1 = require("mercadopago");
const back_url = " https://df09-152-202-204-36.ngrok-free.app/api/";
const front_url = "https://mitiendapp23.netlify.app/";
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let prefItem;
    let prefPayer;
    prefItem = {
        category_id: undefined,
        currency_id: undefined,
        description: req.body.product.description,
        id: req.body.product.id,
        picture_url: req.body.product.image,
        quantity: req.body.product.quantity,
        title: req.body.product.name,
        unit_price: req.body.product.price
    };
    prefPayer = {
        name: req.body.payer.firstName,
        address: req.body.payer.address,
        email: req.body.payer.email,
        identification: req.body.payer.document,
        surname: req.body.payer.lastName,
        date_created: undefined,
        phone: undefined
    };
    try {
        const client = new mercadopago_1.MercadoPagoConfig({
            accessToken: "TEST-5979417188444398-062800-d2d07c1dea382c16ce5091b6cd5a8f3b-1409740750"
        });
        const payment = new mercadopago_1.Payment(client);
        const body = {
            transaction_amount: 12.34,
            description: '<DESCRIPTION>',
            payment_method_id: 'MASTER',
            payer: {
                email: 'santiagoosorio310@gmai.com'
            },
        };
        payment.create({ body }).then((data) => console.log(data)).catch((data) => console.log(data));
        // mercadopago.configure({
        //     access_token: "TEST-5979417188444398-062800-d2d07c1dea382c16ce5091b6cd5a8f3b-1409740750"
        // });
        // const result = await mercadopago.preferences.create({
        //     items: [{
        //         title:"test",
        //         unit_price:500,
        //         currency_id:"COP",
        //         quantity:1
        //     }],
        //     back_urls: {
        //         success: `${back_url}success`,
        //         failure: `${back_url}failure`,
        //         pending: `${back_url}pending`
        //     },
        //     notification_url: `${back_url}order/webhook`,
        //     payment_methods:{
        //         default_payment_method_id:"master"
        //     }
        // })
        // res.status(201).json(result.body);
    }
    catch (err) {
        res.status(500).json({
            message: err
        });
    }
});
exports.createOrder = createOrder;
const receiveWebhook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    const payment = req.query;
    try {
        if (payment.type == 'payment') {
            // const data = await mercadopago.payment.findById(payment['data.id'])
        }
        res.sendStatus(204);
    }
    catch (err) {
        console.log(err);
        return res.send(500).json({ message: err });
    }
});
exports.receiveWebhook = receiveWebhook;
const orderSuccess = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    window.location.href = `${front_url}/success`;
    res.sendStatus(200);
});
exports.orderSuccess = orderSuccess;
const orderFailure = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    window.location.href = `${front_url}/failure`;
    res.sendStatus(200);
});
exports.orderFailure = orderFailure;
const orderPending = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    window.location.href = `${front_url}/pending`;
    res.sendStatus(200);
});
exports.orderPending = orderPending;
