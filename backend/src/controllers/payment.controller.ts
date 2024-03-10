// @ts-nocheck
import e, { NextFunction, Request, Response } from "express";
import { MercadoPagoConfig, Payment, } from 'mercadopago';
import mercadopago from 'mercadopago';
import { PreferenceItem, PreferencePayer } from "mercadopago/models/preferences/create-payload.model";
const back_url = " https://df09-152-202-204-36.ngrok-free.app/api/"
const front_url = "https://mitiendapp23.netlify.app/"

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {

    let prefItem: PreferenceItem;
    let prefPayer: PreferencePayer;

    prefItem = {
        category_id: undefined,
        currency_id: undefined,
        description: req.body.product.description,
        id: req.body.product.id,
        picture_url: req.body.product.image,
        quantity: req.body.product.quantity,
        title: req.body.product.name,
        unit_price: req.body.product.price
    }
    prefPayer = {
        name: req.body.payer.firstName,
        address: req.body.payer.address,
        email: req.body.payer.email,
        identification: req.body.payer.document,
        surname: req.body.payer.lastName,
        date_created: undefined,
        phone: undefined
    }
    try {

        const client = new MercadoPagoConfig({
            accessToken: "TEST-5979417188444398-062800-d2d07c1dea382c16ce5091b6cd5a8f3b-1409740750"
        })
        const payment = new Payment(client);
        const body = {
            transaction_amount: 12.34,
            description: '<DESCRIPTION>',
            payment_method_id: 'MASTER',
            payer: {
                email: 'santiagoosorio310@gmai.com'
            },
        }
        payment.create({body}).then((data)=>console.log(data)).catch((data)=>console.log(data));

        // mercadopago.configure({
        //     access_token: "TEST-5979417188444398-062800-d2d07c1dea382c16ce5091b6cd5a8f3b-1409740750"
        // });
        // const result = await mercadopago.preferences.create({
        //     items: [{
        //         title:"test",
        //         unit_price:500,
        //         currency_id:"COP",
        //         quantity:1
        //     }],
        //     back_urls: {
        //         success: `${back_url}success`,
        //         failure: `${back_url}failure`,
        //         pending: `${back_url}pending`
        //     },
        //     notification_url: `${back_url}order/webhook`,
        //     payment_methods:{
        //         default_payment_method_id:"master"
        //     }
        // })
        // res.status(201).json(result.body);
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
}

export const receiveWebhook = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.query);
    const payment: any = req.query;
    try {
        if (payment.type == 'payment') {
            // const data = await mercadopago.payment.findById(payment['data.id'])
        }
        res.sendStatus(204);
    } catch (err) {
        console.log(err);
        return res.send(500).json({ message: err })

    }
}

export const orderSuccess = async (req: Request, res: Response, next: NextFunction) => {
    window.location.href = `${front_url}/success`;
    res.sendStatus(200);
}
export const orderFailure = async (req: Request, res: Response, next: NextFunction) => {
    window.location.href = `${front_url}/failure`;
    res.sendStatus(200);
}
export const orderPending = async (req: Request, res: Response, next: NextFunction) => {
    window.location.href = `${front_url}/pending`;
    res.sendStatus(200);
}

