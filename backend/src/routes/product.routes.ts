import { Router } from "express";
import { createProduct, deleteProductHandler, getProductById, getProductsByCompany, getProducts, updateProductHandler } from "../controllers/product.controller";
import multer from 'multer'; // Importa multer
// const fs= require('node:js');
import * as fs from 'fs';


// export function adaptarNameImage(file){
//     const newpath = `./uploads/${file.originalname}`;
//      fs.renameSync(file.path,newpath)
//      return newpath;
// }
const ROUTER = Router();

const upload = multer({ dest: './uploads' });

ROUTER.get('/company/:idDocumentoEmpresa/products', getProductsByCompany);
ROUTER.get('/product', getProducts);
ROUTER.get('/product/id', getProductById);
ROUTER.post('/product/create',upload.single('image'),createProduct);
ROUTER.post('/product/delete', deleteProductHandler)
ROUTER.post('/product/update', updateProductHandler)


module.exports = ROUTER;
