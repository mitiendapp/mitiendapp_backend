"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRoles = void 0;
const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        const rolesArray = [...allowedRoles];
        if (!(req === null || req === void 0 ? void 0 : req.roles))
            return res.sendStatus(401);
        const result = req.roles.map((role) => rolesArray.includes(role)).find((val) => val === true);
        if (!result)
            return res.sendStatus(401);
        next();
    };
};
exports.verifyRoles = verifyRoles;
