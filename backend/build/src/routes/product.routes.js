"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const verifyJWT_1 = require("../middlewares/verifyJWT");
const verifyRoles_1 = require("../middlewares/verifyRoles");
const ROUTER = (0, express_1.Router)();
ROUTER.get('/product', product_controller_1.getProducts);
ROUTER.get('/product/id', product_controller_1.getProductById);
ROUTER.post('/product/create', verifyJWT_1.verifyJWT, (0, verifyRoles_1.verifyRoles)(['emprendedor']), product_controller_1.createProduct);
ROUTER.post('/product/delete', product_controller_1.deleteProductHandler);
ROUTER.post('/product/update', product_controller_1.updateProductHandler);
module.exports = ROUTER;
