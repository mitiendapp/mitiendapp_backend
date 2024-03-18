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
const secret = "test_events_Du22wRnRmlltx7Tm3iY7ltWT8GLWXsTf";
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
const findProperties = (obj, fn) => Object.keys(obj).filter(key => fn(obj[key], key, obj));
const receiveWebhook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, event, signature, timestamp } = req.body;
    try {
        const properties = signature.properties.map((e) => e.split('.'));
        let newP = properties.map((property) => {
            return (data[property[0]][property[1]]);
        }).reduce((prev, curr) => prev + curr);
        newP += timestamp;
        newP += secret;
        const mySha = yield sha256(newP);
        if (signature.checksum === mySha) {
            if (event == 'transaction.updated') {
                // on tansaction updated
            }
            else if (event == 'nequi_token.updated') {
                // on nequi token updated
            }
            res.status(200).json({ transaction: data.transaction });
        }
        else {
            throw new Error('Signature insecure');
        }
        ;
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: err });
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
function sha256(message) {
    return __awaiter(this, void 0, void 0, function* () {
        // encode as UTF-8
        const msgBuffer = new TextEncoder().encode(message);
        // hash the message
        const hashBuffer = yield crypto.subtle.digest('SHA-256', msgBuffer);
        // convert ArrayBuffer to Array
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        // convert bytes to hex string                  
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    });
}
