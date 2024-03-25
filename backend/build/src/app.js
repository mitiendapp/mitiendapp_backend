"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./models/index"));
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = require("body-parser");
require("./auth/passport");
const cors_1 = __importDefault(require("cors"));
// import fileUpload from 'express-fileupload';
const app = (0, express_1.default)();
// CREACIÓN AUTOMÁTICA DE PRODUCTOS Y EMPRENDIMIENTOS
// 
// ------------   NO BORRAR  -------------- 
// products.forEach((p)=>{
//     //console.log(p);
//     db.Product.create(p);
// })
// companies.forEach(async (c: any) => {
//     let { document, firstName, lastName, email, roles, password, status } = c;
//     roles = Object.assign({}, { "Company": 4068 });
//     const passwordHassed = await bcrypt.hash(password, 10);
//     const u = {
//         document,
//         firstName,
//         lastName,
//         email,
//         roles: roles,
//         password: passwordHassed,
//         status: status,
//         id: document
//     }
//     db.User.create(u);
//     const cc = {
//         ...c,
//         UserId: c.document
//     }
//     db.Company.create(cc);
// })
// 
// ------------   NO BORRAR  -------------- 
//
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({
    extended: true
}));
//const allowedOrigins = ['*','http://localhost:4200', ' http://127.0.0.1:4040', 'https://d43d-152-202-200-21.ngrok.io','https://mitiendapp23.netlify.app/api', 'https://mitiendapp23.netlify.app']
// app.use(cors({
//     origin: 'https://mitiendapp23.netlify.app',
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
// }))
app.use((0, cors_1.default)());
app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    });
});
/***************************************** */
// app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : './uploads'
// }));
/***************************************** */
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
