import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';



export const envioCorreoCompany = (req: Request, resp: Response) => {
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
        subject: 'Pruebas Correo',
        text: 'Beinvenido a mitiendapp',
        html: '<p><img src="https://lh3.googleusercontent.com/pw/AP1GczP2Yf1zciLiIoLVfhWM-4-SY5lyzH8OCFsbY2soJn3GbeQBPC31DOVtPK5NRZ46rSb0G1iy4a_Wvhbg5N9fW27WnF7u18Ike8ZRzwZD9KsZDFRYaa5hWhEY7slnN2Iqpptgyz7o2qL9OuuYdfpSIWnBioyrXFatgluMU0hSiU5TEceR5-x5htZ_iy11TQh6xdAZZK1ckTkyRlWwITXNtcqMRa5mXij_KGiiQ9sZ3-5r4RDGdirunkR2pyQt6nrdPfKWzsJ46JRLYHftVELz7MLXcQyXXxi_bsEioc9v5XMTxQUHl37gstyxxbCaREJQKDpAZqPDGlY4BOmzflIORU1-F2Bb7ciK1VClfbfSPJ6GQRBSQKzzlYcEqsBfvY9oSkV28DmjA6EJQmO3AVTWncQ1ooYK4KOTo29yA561hiB1FJSFUIFm9aFbJ4hYxXiutMxteW7lZW7UCmyoWoGvZan1MrQ3HN38Ee8mMJtko9vxf2320h54xe6v1e0iiOUStLmSosu0ZZJkRLeBVjXHREvFSTU2nV_AFM_KILHdwv5vUbfxO9X10Iuzo40VHof2hPCcN-wI35AI6uSzanwczqhA7o2LIsGzawdatrEcObBOt7uz8cz_MqMxlqjhFV-3x-xqgiwPIEayQf4ltHhqruUuzJy4TEg7FEaNUdk7GhY097JsokJ62h5dlfGTpeCOnoZKJs5kiDi06OgFd91DFxe_C_tLjy2vC2yGn0Paym82yyq4_OhANeKLeaF33JQYnR2b0und2I_Co5eXlZo8GJfmwTWU3twJgBXfAHEU7b00UBe43oo1BbU7AMQZzOWTr_s0rjBTvP0sB8Ympha1rDCDqhQz4EfBRpXpIr2_6K90Hrx34orMXuQK3HS8qSbuXRKtgngPpZvivtCpZF2Y5Z8=w337-h599-s-no-gm?authuser=0"></p>',
       // attachments: [
            // {
            //   filename: 'imagen.jpg',
            //   path: '',
            //   cid: 'Bienvenido', 
            // },
         // ],
    };

    config.sendMail(opciones, function(error, result) {
        if (error) return resp.json({ ok: false, msg: error });
        return resp.json({
            ok: true,
            msg: result
        });
    });
};



