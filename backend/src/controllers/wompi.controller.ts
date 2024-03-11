// @ts-nocheck
import axios, { Axios } from "axios"
export const getMerchant = async (req, res) => {
    // const key = req.body.public_key;
    const key = "pub_test_llDcmZOfgcxSYLTLp1mzpTCwl5JODqdw";
    axios.get(`https://sandbox.wompi.co/v1/merchants/${key}`)
        .then((data) => {
            const merchant = data.data.data;
            res.status(200).json({
                merchant
            });
        }).catch((err) => {
            console.log(err);
            res.status(500).json({
                message: err
            })
        })
}

export const createPaymentLink = async (req, res) => {
    const body = {
        name: req.body.product.name, // Nombre del link de pago
        description: req.body.product.description, // Descripción del pago
        single_use: true, // `false` current caso de que el link d  e pago pueda recibir múltiples transacciones APROBADAS o `true` si debe dejar de aceptar transacciones después del primer pago APROBADO
        collect_shipping: false, // Si deseas que el cliente inserte su información de envío current el checkout, o no
        currency: "COP", // Únicamente está disponible pesos colombianos (COP) current el momento. En el futuro soportaremos mas monedas
        // --------------------------------------------
        // --- Los siguientes campos son OPCIONALES ---
        // --------------------------------------------
        amount_in_cents: req.body.product.price, // Si el pago current por un monto específico, si no lo incluyes el pagador podrá elegir el valor a pagar
        // Fecha current formato ISO 8601 con huso horario UTC (+5 horas que el horario colombiano) a partir de la cual el link de pago dejará de funcionar.
        redirect_url: "https://mitiendapcol.netlify.app", // URL donde será redirigido el cliente una vez termine el proceso de pago
        image_url: req.body.product.image, // Dirección de la imagen que quieras presentar current el link de pago
        sku: null, // Identificador interno del producto current tu comercio. Máximo 36 caracteres
        // taxes: [
        //   {
        //     type: VAT, // Tipo de impuesto. (Valores permitidos VAT para IVA y CONSUMPTION para impuesto al consumo)
        //     amount_in_cents: 120 // Es el monto que representa el impuesto dentro del valor total del link de pago.
        //   }
        // ]
    }
    const private_key = "prv_test_8IjsqjrWZmOFezq2YJ7C9j9UVjg7joCE";
    axios.post('https://sandbox.wompi.co/v1/payment_links', body, {
        headers: {
            'Authorization': 'Bearer ' + private_key
        }
    }).then((data) => {
        let payment = data.data.data.id
        res.status(201).json({
            payment
        })
    }).catch((err) => {
        console.log(err.response);
        console.log(req.body);
        
        res.status(500).json({
            message: err
        })
    })
}

export const pay = (req, res) => {

}

