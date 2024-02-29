import { NextFunction, Response, Request } from "express"
import { dataDecoded, verifyJWT } from "./verifyJWT"
import { decode } from "jsonwebtoken"
 

// export const verifyRoles = (...allowedRoles:any)=>{  
//     return (
//         req:any,
//         res:Response,
//         next:NextFunction
//     )=>{
//         const rolesArray = [...allowedRoles];
//         if(!req?.roles) return res.sendStatus(401);
//         const result = req.roles.map((role: any) => rolesArray.includes(role)).find((val:any)=>val === true);
//         if(!result) return res.sendStatus(401);
//         next();
//     }
// }

export const verifyRoles =(requiredRoles: string[] = []) =>{
        return (req:Request, res:Response, next:NextFunction)=>{

            const role =    dataDecoded.role
            if (requiredRoles.length === 0 || requiredRoles.includes(role)) {
                next();
            } else {
                return res.status(401).json({ auth: false, message: `Invalid role. Required roles: ${requiredRoles.join(', ')}` });
            }
    
}


}