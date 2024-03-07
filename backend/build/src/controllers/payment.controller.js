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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSuccess = exports.receiveWebhook = exports.createOrder = void 0;
const mercadopago_1 = __importDefault(require("mercadopago"));
let url = "https://a797-2801-1ca-5-511-9dd6-6fad-51ac-59f.ngrok.io";
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    let prefItem;
    let prefPayer;
    prefItem = {
        category_id: undefined,
        currency_id: undefined,
        description: req.body.description,
        id: req.body.id,
        picture_url: req.body.image,
        quantity: req.body.quantity,
        title: req.body.name,
        unit_price: req.body.price
    };
    prefPayer = {
        name: req.body
    };
    try {
        mercadopago_1.default.configure({
            access_token: "TEST-5979417188444398-062800-d2d07c1dea382c16ce5091b6cd5a8f3b-1409740750"
        });
        const result = yield mercadopago_1.default.preferences.create({
            items: [prefItem],
            back_urls: {
                success: "http://localhost:4200/",
                failure: "http://localhost:3000/api/order/failure",
                pending: "http://localhost:3000/api/order/pending"
            },
            notification_url: `${url}/api/order/webhook`
        });
        console.log("entra 2");
        res.send(result.body);
    }
    catch (err) {
        res.sendStatus(500);
    }
});
exports.createOrder = createOrder;
const receiveWebhook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    const payment = req.query;
    try {
        if (payment.type == 'payment') {
            const data = yield mercadopago_1.default.payment.findById(payment['data.id']);
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
    //window.location.href="http://localhost:4200";
    res.sendStatus(200);
});
exports.orderSuccess = orderSuccess;
