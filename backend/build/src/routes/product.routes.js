"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const multer_1 = __importDefault(require("multer")); // Importa multer
// export function adaptarNameImage(file){
//     const newpath = `./uploads/${file.originalname}`;
//      fs.renameSync(file.path,newpath)
//      return newpath;
// }
const ROUTER = (0, express_1.Router)();
const upload = (0, multer_1.default)({ dest: './uploads' });
ROUTER.get('/product', product_controller_1.getProducts);
ROUTER.get('/product/id', product_controller_1.getProductById);
ROUTER.get('/product/company/:companyId', product_controller_1.getProductByCompanyId);
ROUTER.get('/product/companies/:companyId', product_controller_1.getProducstByCompanyId);
// ROUTER.post('/product/create',createProduct);
ROUTER.post('/product/create/', upload.single('image'), product_controller_1.createProduct);
ROUTER.post('/product/delete', product_controller_1.deleteProductHandler);
ROUTER.post('/product/update', product_controller_1.updateProductHandler);
module.exports = ROUTER;
