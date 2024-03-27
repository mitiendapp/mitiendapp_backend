import { Request, Response, NextFunction } from 'express';
import db from "../models/index";
import nodemailer from 'nodemailer';

let allEmails: string[] = []; // Variable para almacenar todos los correos
for(let i = 0 ; i<=allEmails.length ; i++){
    const correosParaEnviar= allEmails[i];
    console.log(`${"el correo numero: "} , ${i} es : ${correosParaEnviar}`)

}

export const getCorreos = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // Busca todos los usuarios y selecciona solo el campo 'email'
        const usuarios = await db.User.findAll();
        
        // Verifica si se encontraron usuarios
        if (!usuarios || usuarios.length === 0) {
            return res.status(404).json({ message: "No se encontraron usuarios" });
        }

        // Extrae los correos de los usuarios encontrados y los agrega a la variable 'allEmails'
        const correos = usuarios.map((usuario: any) => usuario.email);
        allEmails.push(...correos);

        // Imprime los correos por consola
        console.log("Correos encontrados:", correos);

        // Llamada a la función para enviar correos masivos
        await enviarCorreosMasivos(correos, req, res);

        // Envía la respuesta con los correos encontrados
        return res.status(200).json({
            message: "Correos encontrados satisfactoriamente",
            data: correos
        });
    } catch (error: any) {
        // Manejo de errores
        console.error('Error al buscar correos electrónicos:', error);
        res.status(500).json({
            message: "Ocurrió un error interno"
        });
        next(error);
    }
};

// Función para enviar correos masivos
const enviarCorreosMasivos = async (correos: string[], req: Request, resp: Response) => {
    try {
        // Convierte el array de correos en una cadena separada por comas
        const correosSeparadosPorComas = correos.join(', alvarezhoyosleonardo@gmail.com, ');

        let config = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'mitiendapp6@gmail.com',
                pass: 'q e a a d b u v k r u l w b r z'
            }
        });
    
        const opciones = {
            from: 'mitiendapp6@gmail.com',
            to: correosSeparadosPorComas, // Utiliza la cadena de correos separada por comas
            subject: 'Bienvenida_mitiendapp',
            text: 'hola las promociones son: 1213123',
            html: '<p><img src=""></p>',
        };
    
        let result = await config.sendMail(opciones);
        
        console.log("Correos enviados satisfactoriamente:", correos); // Imprime los correos enviados
        
        return result; // No se envía respuesta al cliente desde esta función
    } catch (error) {
        console.error('Error al enviar correos electrónicos:', error); // Manejo de errores
        throw error; // Propaga el error para que sea manejado en la función getCorreos
    }
};
