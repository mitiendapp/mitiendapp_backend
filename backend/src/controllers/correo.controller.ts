import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';



export const envioCorreo = (req: Request, resp: Response) => {
    let body = req.body;

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
        to: body.email,
        subject: 'Mitiendapp_Bienvenida',
        text: '',
        html: '<img src="src/assets/img/bienvenidaClientes.png" alt="Imagen adjunta">',
        attachments: [
            {
              filename: 'imagen.jpg',
              path: 'backend/src/assets/img/bienvenidaClientes.png',
              cid: 'Bienvenido', 
            },
          ],
    };

    config.sendMail(opciones, function(error, result) {
        if (error) return resp.json({ ok: false, msg: error });
        return resp.json({
            ok: true,
            msg: result
        });
    });
};



