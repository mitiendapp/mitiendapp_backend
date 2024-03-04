import e, { NextFunction, Request, Response } from "express";
import mercadopago from 'mercadopago';
import { PreferenceItem, PreferencePayer } from "mercadopago/models/preferences/create-payload.model";
let url= "https://a797-2801-1ca-5-511-9dd6-6fad-51ac-59f.ngrok.io"
export const createOrder = async(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.body);
    let prefItem:PreferenceItem;
    let prefPayer:PreferencePayer;

    prefItem ={
        category_id:undefined,
        currency_id:undefined,
        description:req.body.description,
        id:req.body.id,
        picture_url:req.body.image,
        quantity:req.body.quantity,
        title:req.body.name,
        unit_price:req.body.price
    }
    prefPayer = {
        name:req.body
    }
    try{
    mercadopago.configure({
        access_token:"TEST-5979417188444398-062800-d2d07c1dea382c16ce5091b6cd5a8f3b-1409740750"
    });
    const result = await mercadopago.preferences.create({
        items:[prefItem],
        back_urls:{
            success: "http://localhost:4200/",
            failure: "http://localhost:3000/api/order/failure",
            pending: "http://localhost:3000/api/order/pending"
        },
        notification_url: `${url}/api/order/webhook`
    })
    console.log("entra 2");
    res.send(result.body);
}catch(err){
    res.sendStatus(500);
}
}

export const receiveWebhook = async(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.query);
    const payment:any = req.query;
    try{
    if(payment.type =='payment'){
       const data = await mercadopago.payment.findById(payment['data.id'])
    }
    res.sendStatus(204);
    }catch(err){
        console.log(err);
        return res.send(500).json({message: err})
        
    }
}

export const orderSuccess =async (req:Request,res:Response,next:NextFunction) => {
    //window.location.href="http://localhost:4200";
    res.sendStatus(200);
}
