import { NextFunction, Request, Response } from "express";
export declare const getProducts: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getProductById: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const addProducts: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
