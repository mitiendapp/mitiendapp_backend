"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envioCorreo = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const envioCorreo = (req, resp) => {
    let body = req.body;
    let config = nodemailer_1.default.createTransport({
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
        html: '<HTML><br><img src="https://lh3.googleusercontent.com/pw/AP1GczOjTf8fDq0R9rQzzrJqLXOVKE8Pw9iKKe0v02hmNcIySqPOcLuPF7SoNLUSVql_MIwtL90QFplunOjKKXanRmO7MJjZAmuxm-O_9ZLmoboDNgkPflRLZtxLCj-_5qvmCeIEWCiRjSPJpLJ8kswUtrnRLiAauXTg64ew5aze2TRxYdjQwRE3t4-PNHOFN4J_GuGg7s4INui4XTm6iu3ymSNY9X692eyql-i4OWo8WIrr0-axC4bdht12YZJ6eOtRvFiPZQXAEnqMEHQ8frBtTwKZSzVyQkWETMUpmsQKi5huD6o7VycZCJpAXG-6z-nxNMfnwwO7nAKXI5ujMV7vBk5EWuYvj4NsyJN-L3EghOvUffmqprG_ecl1aqUKOdVTsao0TtwrHnH_MR2JcJPbEusxwZD_H6j1IK2aWrgm0IQzrdtibxYCbWRUbneUFuBgUjx4pLLyal6sgOrPkImdmLq1E0B6oWKavAWOl2HuifhFa4k3xB6IyJ6Bm7XwgX6NJLqq0RdATGQCp1Ba_HZvOTdsa5dL4KLbwPer3yvirjrag1vJG4s0ZuzFtiepqYkGtAlKOIJ6YE_Dojx1zJPWigMqWNhEgTqKHxhc4CG6Kou8RH22t2ejyAQaQ5WD3Np-2NMCHJd1ButKCbKbfnpIKw2NRSIwV38J8dw_T-UA2S9iGTQuXlIJTCgXpxwWEWBwELoCTVf2xhalM0GP-sl0M-JBQK8kuLxhGiR6DQQlBLb5otSw5tT9XfxtiVaWMryvjy-G-p0Rt-VuRpfkyQwGRsSwEFrl71Kg0xfU1RcTVAEk1kiUzeqnDKRC8CRRCoxC-q8GDYbiO2lENPISkk-PUHR4zPB2SKVp0kFAN-IG3DUmlXQKnjjEr_Rfkli58M42TfWV6b5FXu0VV1MlVGbuShd3=w599-h599-s-no-gm?authuser=0" alt="Imagen adjunta"></br></HTML>',
        text: 'Bienvenido ' + body.email,
        //     attachments: [
        //         {
        //           filename: 'imagen.jpg',
        //           path: '',
        //           cid: 'Bienvenido', 
        //         },
        //       ],
    };
    config.sendMail(opciones, function (error, result) {
        if (error)
            return resp.json({ ok: false, msg: error });
        return resp.json({
            ok: true,
            msg: result
        });
    });
};
exports.envioCorreo = envioCorreo;
