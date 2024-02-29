import { Router } from "express";
import { getProducts } from "../controllers/product.controller";
import { addProducts, removeProducts } from "../controllers/shoppingcart.controller";
import { verifyJWT } from "../middlewares/verifyJWT";


const ROUTER = Router();

ROUTER.get('/cart/get',  getProducts); // pendiente de cambiar
ROUTER.post('/cart/add', addProducts); // pendiente de cambiar
//ROUTER.post('/cart/remove', removeProducts)

module.exports = ROUTER;