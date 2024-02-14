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
exports.removeProducts = exports.addProducts = exports.getProductById = exports.getProducts = void 0;
const models_1 = __importDefault(require("../models"));
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield models_1.default.shoppingCart.findAll();
        console.log(products);
        if (!products)
            return res.sendStatus(404);
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
const getProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    const product = yield models_1.default.shoppingCart.findOne({
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
const addProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield models_1.default.shoppingCart.create(Object.assign({}, req.body));
    return res.status(201).json({
        message: "Producto añadido satisfactoriamente",
        data: product
    });
});
exports.addProducts = addProducts;
const removeProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //const product = await getProductById(req.body.id)
});
exports.removeProducts = removeProducts;
