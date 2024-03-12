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

export const getProductByCompanyId = async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    const {companyId} = req.params;
    const product = await db.Product.findOne({
        where: {companyId:companyId}
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
        // Verifica si se ha cargado algún archivo
        if (!req.file) {
            return res.status(400).json({ message: 'No se ha cargado ninguna imagen' });
        }
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
            
            companyId: req.params.companyId //aqui tiene que llegar el id del emprendedor
            
        });

        return res.status(201).json({
            message: 'Producto creado satisfactoriamente',
            data: product,
        });
    } catch (error) {
        // Manejo de errores
        console.error(error);
        return res.status(500).json({ message: 'Ocurrió un error interno' });
    }
};