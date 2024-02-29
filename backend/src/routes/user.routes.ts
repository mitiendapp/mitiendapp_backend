import { Router } from "express";
import { loginTest, loginUser, registerUser } from "../controllers/auth.controller";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/user.controller";
import passport from "passport";
import { verifyJWT } from "../middlewares/verifyJWT";
import { verifyRoles } from "../middlewares/verifyRoles";
import ROLES_LIST from "../../config/role.list";

const ROUTER = Router();

// ROUTER.post('/user/register', registerUser); // pendiente de cambiar

// ROUTER.post('/user/login', loginUser); // pendiente de cambiar

ROUTER.get('/users', getUsers);
ROUTER.get('/user', getUserById);
ROUTER.post('/user/create', createUser);
ROUTER.post('/user/update', updateUser);
ROUTER.post('/user/delete', deleteUser);

ROUTER.get('/test', passport.authenticate("jwt", { session: true }), loginTest); // pendiente de cambiar

ROUTER.get('/test2', verifyJWT, verifyRoles(ROLES_LIST.Admin) , loginTest); // pendiente de cambiar 


module.exports = ROUTER;
