import { NextFunction, Request, RequestHandler, Response } from "express";
import db from "../models";
// import {uploadImage} from '../../config/cloudinary'
import { UploadedFile } from "express-fileupload"; // Importar UploadedFile
import multer, { FileFilterCallback } from 'multer'; // Importar multer
// import { adaptarNameImage } from "../routes/product.routes";
import { uploadImage } from '../../config/cloudinary';


export const getProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const products = await db.Product.findAll();
        
        if (!products) return res.sendStatus(404);
        
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
        })
    } catch (e: any) {
        res.status(500).json({
            message: "Ocurrió un error interno"
        })
        next(e);
    }
}

export const deleteProductHandler:RequestHandler = async (
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    const id:string = req.body.id;
    const deleteProduct = await db.Product.findByPk(id);
    await db.Product.destroy({where: {id} });
    return res.status(200).json(
        {
            message:"product delete succesfully",
            data: deleteProduct
        }
    )
}


export const updateProductHandler = async (
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    const id:number = req.body.id;  

    if(!id){
        return res.status(400).json(
            {
                message:"Id missing"    
            }
        )
    }
    await db.Product.update({...req.body},{where: {id} })
    const product = await db.Product.findByPk(id);
    return res.status(200).json(
        {
            message:"Product updated succesfully",
            data: product
        }
    )
}


export const getProductById = async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    const {id} = req.query;
    const product = await db.Product.findOne({
        where: {id:id}
    })
    if(product){
        return res.status(200).json({
            message:"Producto encontrado satisfactoriamente",
            data:product
        })
    }
}


export const createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log('si paso');
        // Verifica si se ha cargado algún archivo
        if (!req.file) {
            return res.status(400).json({ message: 'No se ha cargado ninguna imagen' });
        }
        console.log(req.file)   
        //   const adaptar = adaptarNameImage(req.file.path)
        // Carga la imagen en Cloudinary
        const cloudinaryResponse = await uploadImage(req.file.path);

        // // Verifica si la carga en Cloudinary fue exitosa
        if (!cloudinaryResponse || !cloudinaryResponse.secure_url) {
            return res.status(500).json({ message: 'Error al cargar la imagen en Cloudinary' });
        }

        // Crea un nuevo producto en la base de datos
        const product = await db.Product.create({
            ...req.body,
            image: cloudinaryResponse.secure_url,
            companyId: 1, //aqui tiene que llegar el id del emprendedor
        });

        return res.status(201).json({
            message: 'Producto creado satisfactoriamente',
            data: product,
        });
    } catch (error) {
        // Manejo de errores
        console.log('hplasdadsqwdasdqwdasawdfefasdf');
        console.error(error);
        console.log('wrethhgdsdfjgadsrtyjdhgsefweref');
        return res.status(500).json({ message: 'Ocurrió un error interno' });
    }
};

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