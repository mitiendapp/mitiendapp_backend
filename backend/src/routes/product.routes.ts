import { Router } from "express";
import { createProduct, deleteProductHandler, getProductById, getProducts, updateProductHandler } from "../controllers/product.controller";
import { verifyJWT } from "../middlewares/verifyJWT";
import { verifyRoles } from "../middlewares/verifyRoles";


const ROUTER = Router();

ROUTER.get('/product', getProducts);
ROUTER.get('/product/id', getProductById);
ROUTER.post('/product/create', verifyJWT, verifyRoles(['emprendedor']),  createProduct)
ROUTER.post('/product/delete', deleteProductHandler)
ROUTER.post('/product/update', updateProductHandler)


module.exports = ROUTER;
