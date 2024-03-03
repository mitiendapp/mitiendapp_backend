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
        to: 'josel.alvarezh@uqvirtual.edu.co',
        subject: 'Pruebas Correo',
        text: 'Envio de correo desde node js utilizando nodemailer',
        html: '<p></p>',
        attachments: [
            {
              filename: 'imagen.jpg',
              path: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Fbienvenida&psig=AOvVaw0_XuEUmTb-5r_ePERQJfRH&ust=1709525764458000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODJvfqd14QDFQAAAAAdAAAAABAE',
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



