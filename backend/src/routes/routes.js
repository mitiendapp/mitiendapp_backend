"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("../controllers/client.controller");
const user_controller_1 = require("../controllers/user.controller");
const passport_1 = require("passport");
const verifyRoles_1 = require("../middlewares/verifyRoles");
const role_list_1 = require("../../config/role.list");
const auth_controller_1 = require("../controllers/auth.controller");
const verifyJWT_1 = require("../middlewares/verifyJWT");
const product_controller_1 = require("../controllers/product.controller");
const payment_controller_1 = require("../controllers/payment.controller");
const shoppingcart_controller_1 = require("../controllers/shoppingcart.controller");
const router = (0, express_1.Router)();
router.post('/createClient', client_controller_1.createClient);
// User routes
router.post('/user/register', user_controller_1.registerUser);
router.post('/user/login', auth_controller_1.loginUser);
// Product routes
router.get('/product', product_controller_1.getProducts);
router.get('/test/', product_controller_1.getProductById);
router.post('/product', product_controller_1.createProduct);
router.get('/cart/get', product_controller_1.getProducts);
// router.get('/cart/getid', getProductById);
router.post('/cart/add', shoppingcart_controller_1.addProducts);
router.post('/product/delete', product_controller_1.deleteProductHandler);
router.post('/product/update', product_controller_1.updateProductHandler);
router.get('/test', passport_1.default.authenticate("jwt", { session: false }), auth_controller_1.loginTest);
router.get('/test2', verifyJWT_1.verifyJWT, (0, verifyRoles_1.verifyRoles)(role_list_1.default.Admin), auth_controller_1.loginTest);
router.post('/order/create', verifyJWT_1.verifyJWT, payment_controller_1.createOrder);
//router.get('/order/success', orderSuccess);
router.get('/order/failure', (req, res) => {
    console.log("orden creada");
});
router.get('/order/pending', (req, res) => {
    console.log("orden creada");
});
router.post('/order/webhook', payment_controller_1.receiveWebhook);
exports.default = router;
