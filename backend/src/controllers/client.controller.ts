import { NextFunction, Request, RequestHandler, Response } from "express";
import db from "../models";
import { ClientService } from "../services/client.service";
import { TokenExpiredError } from "jsonwebtoken";

export const createClient: RequestHandler = async (
    req:Request,
    res:Response,
    ) => {
    const clientService = new ClientService();
    try {
        const client = await clientService.create({...req.body});
        return res.status(201).json(
            {
                message: "Client created succesfully",
                data:client
            }
        )
    } catch (error:any) {
        return res.status(500).json({
            message: error.message
        })
    }
}  
export const getClients: RequestHandler = async (
    req:Request,
    res:Response
) => {
    const clientService = new ClientService();
    try{     
        const clients = await clientService.get();   
        return res.status(200).json({
            clients
        })
    } catch (error:any) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const getClientById: RequestHandler = async(
    req:Request,
    res:Response
)=>{
    const {document} = req.query;
    const clientService = new ClientService();
    try {
        const client = await clientService.find(document);
        return res.status(200).json({
            client
        })
    } catch (error:any) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const updateClient: RequestHandler = async(
    req:Request,
    res:Response
)=>{
    const {document} = req.query;
    const clientService = new ClientService();
    try {
        const client = await clientService.update(document, req.body);
        return res.status(200).json({
            message: "Client updated succesfully",
            statuscode: client
        })
    } catch (error:any) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const deleteClient: RequestHandler = async(
    req:Request,
    res:Response
)=>{
    const {document} = req.query;
    const clientService = new ClientService();
    try {
        const client = await clientService.delete(document);
        console.log(client);
        
        return res.status(200).json({
            message: "Client deleted succesfully",
            statuscode: client
        })
    } catch (error:any) {
        return res.status(500).json({
            message: error.message
        })
    }
}