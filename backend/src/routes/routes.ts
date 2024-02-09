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

//--
router.post('/createClient', createClient)

// User routes
router.post('/user/register', registerUser);

router.post('/user/login', loginUser);

// Product routes

router.get('/product', getProducts);
router.get('/test/', getProductById);
router.post('/product', createProduct)

router.get('/cart/get', getProducts);
// router.get('/cart/getid', getProductById);
router.post('/cart/add', addProducts);



router.post('/product/delete', deleteProductHandler)
router.post('/product/update', updateProductHandler)

router.get('/test', passport.authenticate("jwt", { session: false }), loginTest);
router.get('/test2',verifyJWT, verifyRoles(ROLES_LIST.Admin) , loginTest);


router.post('/order/create', verifyJWT , createOrder);

//router.get('/order/success', orderSuccess);
router.get('/order/failure', (req,res)=>{
    console.log("orden creada");
    
})
router.get('/order/pending', (req,res)=>{
    console.log("orden creada");
    
})

router.post('/order/webhook', receiveWebhook)




export default router; 
