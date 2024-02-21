import { Router } from "express";
import { createProduct, deleteProductHandler, getProductById, getProducts, updateProductHandler } from "../controllers/product.controller";

const ROUTER = Router();

ROUTER.get('/product', getProducts);
ROUTER.get('/product/id', getProductById);
ROUTER.post('/product/create', createProduct)
ROUTER.post('/product/delete', deleteProductHandler)
ROUTER.post('/product/update', updateProductHandler)


module.exports = ROUTER;
