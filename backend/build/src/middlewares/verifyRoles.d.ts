import { NextFunction, Response, Request } from "express";
export declare const verifyRoles: (requiredRoles?: string[]) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
