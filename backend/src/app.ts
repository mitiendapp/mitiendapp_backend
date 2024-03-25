import express from 'express';
import db from './models/index';
import router from './routes/router';
import { json, urlencoded } from 'body-parser';
import './auth/passport';
import cors from 'cors';
import products from './seeders/products';
import companies from './seeders/companies';
import { Sequelize, Op } from 'sequelize';
import bcrypt from 'bcrypt';
// import fileUpload from 'express-fileupload';
const app = express();

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

app.use(json());
app.use(urlencoded({
    extended: true
}))

//const allowedOrigins = ['*','http://localhost:4200', ' http://127.0.0.1:4040', 'https://d43d-152-202-200-21.ngrok.io','https://mitiendapp23.netlify.app/api', 'https://mitiendapp23.netlify.app']
// app.use(cors({
//     origin: 'https://mitiendapp23.netlify.app',
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
// }))

app.use(cors());

app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    res.status(500).json({
        message: err.message
    })
})
/***************************************** */
// app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : './uploads'
// }));
/***************************************** */
app.use('/api', router);

db.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log("Se conecto correctamente");
    })

}).catch((e: Error) => {
    console.log("here");

    console.log(e.message);
})



export default app;