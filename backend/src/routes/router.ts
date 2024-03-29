import { Router } from "express";
const CLIENT_ROUTES = require('./client.routes');
const USER_ROUTES = require('./user.routes');
const PRODUCT_ROUTES = require('./product.routes');
const ORDER_ROUTES = require('./order.routes');
const CART_ROUTES = require('./cart.routes');
const COMPANY_ROUTES=require('./company.routes');
const CORREO_ROUTES=require('./correo.routes');
const CORREO_ROUTESCOMPANY=require('./correoCompany.routes')
const router = Router();

//route correo company
router.use(CORREO_ROUTESCOMPANY)
//route correo cliente
router.use(CORREO_ROUTES);
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

//company route
router.use(COMPANY_ROUTES);

export default router;
