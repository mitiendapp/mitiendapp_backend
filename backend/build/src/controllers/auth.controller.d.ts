import { NextFunction, Request, RequestHandler, Response } from "express";
export declare const loginUser: RequestHandler;
export declare const registerUser: RequestHandler;
export declare const loginTest: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
