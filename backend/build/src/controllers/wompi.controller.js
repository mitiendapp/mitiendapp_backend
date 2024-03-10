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
exports.pay = exports.createPaymentLink = exports.getMerchant = void 0;
// @ts-nocheck
const axios_1 = __importDefault(require("axios"));
const getMerchant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const key = req.body.public_key;
    const key = "pub_test_llDcmZOfgcxSYLTLp1mzpTCwl5JODqdw";
    axios_1.default.get(`https://sandbox.wompi.co/v1/merchants/${key}`)
        .then((data) => {
        const merchant = data.data.data;
        res.status(200).json({
            merchant
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            message: err
        });
    });
});
exports.getMerchant = getMerchant;
const createPaymentLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = {
        name: req.body.product.name,
        description: req.body.product.description,
        single_use: true,
        collect_shipping: false,
        currency: "COP",
        // --------------------------------------------
        // --- Los siguientes campos son OPCIONALES ---
        // --------------------------------------------
        amount_in_cents: req.body.product.price,
        // Fecha current formato ISO 8601 con huso horario UTC (+5 horas que el horario colombiano) a partir de la cual el link de pago dejará de funcionar.
        redirect_url: "https://mitiendapcol.netlify.app",
        image_url: req.body.product.image,
        sku: null, // Identificador interno del producto current tu comercio. Máximo 36 caracteres
        // taxes: [
        //   {
        //     type: VAT, // Tipo de impuesto. (Valores permitidos VAT para IVA y CONSUMPTION para impuesto al consumo)
        //     amount_in_cents: 120 // Es el monto que representa el impuesto dentro del valor total del link de pago.
        //   }
        // ]
    };
    const private_key = "prv_test_8IjsqjrWZmOFezq2YJ7C9j9UVjg7joCE";
    axios_1.default.post('https://sandbox.wompi.co/v1/payment_links', body, {
        headers: {
            'Authorization': 'Bearer ' + private_key
        }
    }).then((data) => {
        let payment = data.data.data.id;
        res.status(201).json({
            payment
        });
    }).catch((err) => {
        console.log(err.response);
        console.log(req.body);
        res.status(500).json({
            message: err
        });
    });
});
exports.createPaymentLink = createPaymentLink;
const pay = (req, res) => {
};
exports.pay = pay;
