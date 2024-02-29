"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRoles = void 0;
const verifyJWT_1 = require("./verifyJWT");
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
const verifyRoles = (requiredRoles = []) => {
    return (req, res, next) => {
        const role = verifyJWT_1.dataDecoded.role;
        if (requiredRoles.length === 0 || requiredRoles.includes(role)) {
            next();
        }
        else {
            return res.status(401).json({ auth: false, message: `Invalid role. Required roles: ${requiredRoles.join(', ')}` });
        }
    };
};
exports.verifyRoles = verifyRoles;
