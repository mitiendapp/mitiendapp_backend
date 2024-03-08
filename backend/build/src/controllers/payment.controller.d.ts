import e, { NextFunction, Request, Response } from "express";
export declare const createOrder: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const receiveWebhook: (req: Request, res: Response, next: NextFunction) => Promise<e.Response<any, Record<string, any>> | undefined>;
export declare const orderSuccess: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const orderFailure: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const orderPending: (req: Request, res: Response, next: NextFunction) => Promise<void>;
