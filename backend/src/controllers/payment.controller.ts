// @ts-nocheck
import e, { NextFunction, Request, Response } from "express";
import { MercadoPagoConfig, Payment, } from 'mercadopago';
import mercadopago from 'mercadopago';
import { PreferenceItem, PreferencePayer } from "mercadopago/models/preferences/create-payload.model";

const back_url = " https://df09-152-202-204-36.ngrok-free.app/api/"
const front_url = "https://mitiendapp23.netlify.app/"
const secret = "test_events_Du22wRnRmlltx7Tm3iY7ltWT8GLWXsTf";
interface paymentAttributes {
    event: string, // Nombre del tipo de evento
    data: {
        // Data específica del evento
    },
    environment: string, // test para Sandbox, prod para Producción
    signature: {
        properties: [
            // Lista de propiedades con las que se construye la firma
        ],
        checksum: string // Hash calculado con una firma asimétrica SHA256
    },
    timestamp: number, // Timestamp UNIX del evento usado para la firma del mismo
    sent_at: string // Fecha current la que se notificó el evento por primera vez
}

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
        payment.create({ body }).then((data) => console.log(data)).catch((data) => console.log(data));

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
const findProperties = (obj, fn) =>
    Object.keys(obj).filter(key => fn(obj[key], key, obj));

export const receiveWebhook = async (req: Request, res: Response, next: NextFunction) => {
    const { data, event, signature, timestamp }: paymentAttributes = req.body;
    try {
        const properties = signature.properties.map((e: string) => e.split('.'));
        let newP = properties.map((property) => {
            return (data[property[0]][property[1]]);

        }).reduce((prev, curr) => prev + curr);
        newP += timestamp;
        newP += secret;
        const mySha = await sha256(newP);
        if (signature.checksum === mySha) {
            if (event == 'transaction.updated') {
                // enviar correo 
            } else if (event == 'nequi_token.updated') {
                // on nequi token updated
            }
            res.status(200).json(
                {transaction: data.transaction} 
            );
        } else {
            throw new Error('Signature insecure');
        };
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err })

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

async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

