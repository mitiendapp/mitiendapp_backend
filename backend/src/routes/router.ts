import { Router } from "express";
const CLIENT_ROUTES = require('./client.routes');
const USER_ROUTES = require('./user.routes');
const PRODUCT_ROUTES = require('./product.routes');
const ORDER_ROUTES = require('./order.routes');
const CART_ROUTES = require('./cart.routes');
const router = Router();


// client routes
router.use(CLIENT_ROUTES);
// User routes
router.use(USER_ROUTES);
// Product routes
router.use(PRODUCT_ROUTES);
// Shopping cart routes
router.use(CART_ROUTES);
// Order routes
router.use(ORDER_ROUTES);

export default router;
