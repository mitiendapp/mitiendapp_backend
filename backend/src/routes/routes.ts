import { Router } from "express";
import { createClient } from "../controllers/client.controller";
import { registerUser } from "../controllers/user.controller";
import passport from "passport";
import { verifyRoles } from "../middlewares/verifyRoles";
import ROLES_LIST from "../../config/role.list";
import { loginTest, loginUser } from "../controllers/auth.controller";
import { verifyJWT } from "../middlewares/verifyJWT";
import { createProduct, deleteProductHandler, getProductById, getProducts, updateProductHandler } from "../controllers/product.controller";
import { createOrder, orderSuccess, receiveWebhook } from "../controllers/payment.controller";
import { addProducts } from "../controllers/shoppingcart.controller";

const router = Router();

router.get('/jest', (req,res)=>{
    res.status(200).json({data:"hola"});
})

router.post('/createClient', createClient) // pendiente de cambiar

// User routes
router.post('/user/register', registerUser); // pendiente de cambiar

router.post('/user/login', loginUser); // pendiente de cambiar

// Product routes

router.get('/product', getProducts); // pendiente de cambiar
router.get('/test/', getProductById); // pendiente de cambiar
router.post('/product', createProduct) // pendiente de cambiar

router.get('/cart/get', getProducts); // pendiente de cambiar
// router.get('/cart/getid', getProductById);
router.post('/cart/add', addProducts); // pendiente de cambiar



router.post('/product/delete', deleteProductHandler) // pendiente de cambiar
router.post('/product/update', updateProductHandler) // pendiente de cambiar

router.get('/test', passport.authenticate("jwt", { session: false }), loginTest); // pendiente de cambiar
router.get('/test2', verifyJWT, verifyRoles(ROLES_LIST.Admin) , loginTest); // pendiente de cambiar 


router.post('/order/create', verifyJWT , createOrder); // pendiente de cambiar

//router.get('/order/success', orderSuccess);
router.get('/order/failure', (req,res)=>{ // pendiente de cambiar
    console.log("orden creada");
})

router.get('/order/pending', (req,res)=>{ // pendiente de cambiar
    console.log("orden creada");
    
})

router.post('/order/webhook', receiveWebhook) // pendiente de cambiar




export default router; 
