"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const shoppingcart_controller_1 = require("../controllers/shoppingcart.controller");
const ROUTER = (0, express_1.Router)();
ROUTER.get('/cart/get', product_controller_1.getProducts); // pendiente de cambiar
ROUTER.post('/cart/add', shoppingcart_controller_1.addProducts); // pendiente de cambiar
//ROUTER.post('/cart/remove', removeProducts)
module.exports = ROUTER;
