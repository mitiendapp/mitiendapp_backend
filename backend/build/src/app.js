"use strict";
// import express from 'express';
// import db from './models/index';
// import router from './routes/router';
// import { json, urlencoded } from 'body-parser';
// import './auth/passport'; 
// import cors from 'cors';
// import { products } from './seeders/products';
// import fileUpload from 'express-fileupload';
// const app = express(); 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // products.forEach((p)=>{
// //     //console.log(p);
// //     db.Product.create(p);
// // })
// app.use(json());
// app.use(urlencoded({
//     extended:true
// }))
// //const allowedOrigins = ['*','http://localhost:4200', ' http://127.0.0.1:4040', 'https://d43d-152-202-200-21.ngrok.io','https://mitiendapp23.netlify.app/api', 'https://mitiendapp23.netlify.app']
// // app.use(cors({
// //     origin: 'https://mitiendapp23.netlify.app',
// //     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
// //     credentials: true,
// // }))
// app.use(cors());
// app.use((
//     err:Error,
//     req:express.Request,
//     res:express.Response, 
//     next:express.NextFunction,
// )=>{
//     res.status(500).json({
//         message:err.message
//     })
// })
// /***************************************** */
// app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : './uploads'
// }));
// /***************************************** */
// app.use('/api', router); 
// db.sequelize.sync().then(()=>{
//     app.listen(3000, ()=>{
//         console.log("Se conecto correctamente");
//     })
// }).catch((e:Error)=>{
//     console.log("here"); 
//     console.log(e.message);  
// })
// export default app;
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./models/index"));
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = require("body-parser");
require("./auth/passport");
const cors_1 = __importDefault(require("cors"));
// import multer from 'multer'; // Importa multer
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use((0, cors_1.default)());
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
// Configura multer para la gestión de archivos
// Se espera un archivo con el nombre 'image'
// Middleware de multer para manejar la carga de archivos
// app.use(upload);
app.use('/api', router_1.default);
index_1.default.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log("Se conecto correctamente");
    });
}).catch((e) => {
    console.log("here");
    console.log(e.message);
});
exports.default = app;
