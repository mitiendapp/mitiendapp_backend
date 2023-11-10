import { NextFunction, Request, RequestHandler, Response } from "express";
import db from "../models";
import { ClientService } from "../services/client.service";

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