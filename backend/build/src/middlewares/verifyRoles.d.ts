import { NextFunction, Response } from "express";
export declare const verifyRoles: (...allowedRoles: any) => (req: any, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
