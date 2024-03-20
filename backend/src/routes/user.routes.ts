import { Router } from "express";
import { loginTest, loginUser, registerUser } from "../controllers/auth.controller";
import { createUser, deleteUser, getUserById, getUsers, updateUser, updateUserImage } from "../controllers/user.controller";
import passport from "passport";
import { verifyJWT } from "../middlewares/verifyJWT";
import { verifyRoles } from "../middlewares/verifyRoles";
import ROLES_LIST from "../../config/role.list";
import multer from "multer";

const ROUTER = Router();

// ROUTER.post('/user/register', registerUser); // pendiente de cambiar
const upload = multer({ dest: './uploads' });


ROUTER.post('/user/login', loginUser); // pendiente de cambiar
ROUTER.get('/users', getUsers);
ROUTER.get('/user/:email', getUserById);
ROUTER.post('/user/create', createUser);
ROUTER.post('/user/update/:email', updateUser);
ROUTER.post('/user/updateImage/:email',upload.single('profile_image'), updateUserImage);
ROUTER.post('/user/delete/:email', deleteUser);

ROUTER.get('/test', passport.authenticate("jwt", { session: true }), loginTest); // pendiente de cambiar

ROUTER.get('/test2', verifyJWT, verifyRoles(ROLES_LIST.Admin) , loginTest); // pendiente de cambiar 


module.exports = ROUTER;
