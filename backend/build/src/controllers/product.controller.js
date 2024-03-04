"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getProductById = exports.updateProductHandler = exports.deleteProductHandler = exports.getProducts = void 0;
const models_1 = __importDefault(require("../models"));
// import { adaptarNameImage } from "../routes/product.routes";
const cloudinary_1 = require("../../config/cloudinary");
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield models_1.default.Product.findAll();
        if (!products)
            return res.sendStatus(404);
        res.setHeader('Access-Control-Allow-Origin', '*');
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        // Pass to next layer of middleware
        next();
        return res.status(200).json({
            message: "Productos encontrados satisfactoriamente",
            data: products
        });
    }
    catch (e) {
        res.status(500).json({
            message: "Ocurrió un error interno"
        });
        next(e);
    }
});
exports.getProducts = getProducts;
const deleteProductHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    const deleteProduct = yield models_1.default.Product.findByPk(id);
    yield models_1.default.Product.destroy({ where: { id } });
    return res.status(200).json({
        message: "product delete succesfully",
        data: deleteProduct
    });
});
exports.deleteProductHandler = deleteProductHandler;
const updateProductHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    if (!id) {
        return res.status(400).json({
            message: "Id missing"
        });
    }
    yield models_1.default.Product.update(Object.assign({}, req.body), { where: { id } });
    const product = yield models_1.default.Product.findByPk(id);
    return res.status(200).json({
        message: "Product updated succesfully",
        data: product
    });
});
exports.updateProductHandler = updateProductHandler;
const getProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    const product = yield models_1.default.Product.findOne({
        where: { id: id }
    });
    if (product) {
        return res.status(200).json({
            message: "Producto encontrado satisfactoriamente",
            data: product
        });
    }
});
exports.getProductById = getProductById;
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Verifica si se ha cargado algún archivo
        if (!req.file) {
            return res.status(400).json({ message: 'No se ha cargado ninguna imagen' });
        }
        console.log(req.file);
        //   const adaptar = adaptarNameImage(req.file.path)
        // Carga la imagen en Cloudinary
        const cloudinaryResponse = yield (0, cloudinary_1.uploadImage)(req.file.path);
        // // Verifica si la carga en Cloudinary fue exitosa
        if (!cloudinaryResponse || !cloudinaryResponse.secure_url) {
            return res.status(500).json({ message: 'Error al cargar la imagen en Cloudinary' });
        }
        // Crea un nuevo producto en la base de datos
        const product = yield models_1.default.Product.create(Object.assign(Object.assign({}, req.body), { image: cloudinaryResponse.secure_url }));
        return res.status(201).json({
            message: 'Producto creado satisfactoriamente',
            data: product,
        });
    }
    catch (error) {
        // Manejo de errores
        console.error(error);
        return res.status(500).json({ message: 'Ocurrió un error interno' });
    }
});
exports.createProduct = createProduct;
// export const createProduct = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     try {
//         // Verifica si se ha cargado algún archivo
//         if (!req.files || Object.keys(req.files).length === 0) {
//             return res.status(400).json({ message: 'No se ha cargado ningún archivo' });
//         }
//         // Extrae el archivo de imagen del cuerpo de la solicitud
//         const imageFile = req.files.image as UploadedFile;
//         // Obtiene la ruta temporal del archivo
//         const tempFilePath = imageFile.tempFilePath;
//          console.log(tempFilePath)
//         // Llama a la función uploadImage con la ruta temporal del archivo
//         const cloudinaryResponse = await uploadImage(tempFilePath);
//         // Crea un nuevo producto en la base de datos
//         const product = await db.Product.create({
//             ...req.body,
//             image: cloudinaryResponse.secure_url,
//         });
//         console.log(cloudinaryResponse);
//         return res.status(201).json({
//             message: "Producto creado satisfactoriamente",
//             data: product
//         });
//     } catch (error) {
//         // Manejo de errores
//         console.error(error);
//         return res.status(500).json({ message: 'Ocurrió un error interno' });
//     }
// };*******************************************************************************
// export const createProduct = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     try {
//         // Verifica si se ha cargado algún archivo desde el frontend
//         if (!req.files || Object.keys(req.files).length === 0 || !req.files.image) {
//             return res.status(400).json({ message: 'No se ha cargado ninguna imagen' });
//         }
//         // Extrae el archivo de imagen del cuerpo de la solicitud
//         const imageFile = req.files.image as UploadedFile;
//         console.log(imageFile);
//         // Obtiene la ruta temporal del archivo
//         const tempFilePath = imageFile.tempFilePath;
//     console.log(tempFilePath);
//         // Carga la imagen en Cloudinary
//         const cloudinaryResponse = await uploadImage(tempFilePath);
//         // Verifica si la carga en Cloudinary fue exitosa
//         if (!cloudinaryResponse || !cloudinaryResponse.secure_url) {
//             return res.status(500).json({ message: 'Error al cargar la imagen en Cloudinary' });
//         }
//         // Crea un nuevo producto en la base de datos
//         const product = await db.Product.create({
//             ...req.body,
//             image: cloudinaryResponse.secure_url
//         });
//         return res.status(201).json({
//             message: 'Producto creado satisfactoriamente',
//             data: product,
//         });
//     } catch (error) {
//         // Manejo de errores
//         console.error(error);
//         return res.status(500).json({ message: 'Ocurrió un error interno' });
//     }
// };
// export const createProduct =async (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     const product = await db.Product.create({...req.body});
//     return res.status(201).json({
//         message:"Producto creado satisfactoriamente",
//         data:product
//     })    
// }
