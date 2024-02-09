import { NextFunction, Request, Response } from "express";
export declare const refreshToken: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
