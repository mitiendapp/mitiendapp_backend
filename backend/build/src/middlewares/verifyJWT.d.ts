import { NextFunction, Response } from "express";
export declare let dataDecoded: any;
export declare const verifyJWT: (req: any, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
