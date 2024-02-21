import { Router } from "express";
import { registerUser } from "../controllers/user.controller";
import { loginTest, loginUser } from "../controllers/auth.controller";
import passport from "passport";
import { verifyJWT } from "../middlewares/verifyJWT";
import { verifyRoles } from "../middlewares/verifyRoles";
import ROLES_LIST from "../../config/role.list";

const ROUTER = Router();

ROUTER.post('/user/register', registerUser); // pendiente de cambiar

ROUTER.post('/user/login', loginUser); // pendiente de cambiar

ROUTER.get('/test', passport.authenticate("jwt", { session: false }), loginTest); // pendiente de cambiar

ROUTER.get('/test2', verifyJWT, verifyRoles(ROLES_LIST.Admin) , loginTest); // pendiente de cambiar 


module.exports = ROUTER;
