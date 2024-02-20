// const express=require("express");
// const { signUp, login, getUser } = require("../controllers/user.controller");
// const {signUpRules,validator}= require("../middleware/validator");
// const verifyAuth=require("../middleware/auth")
// router=express.Router();

// router.post("/signUp",signUpRules(),validator,signUp);
// router.post("/login",login);
// router.get("/auth",verifyAuth,getUser)

// module.exports=router 
const express=require("express");
const{addProducts}=require("../controllers/product.controller");
const{getAllProduct}=require("../controllers/product.controller");
const {updateProduct}=require("../controllers/product.controller");
const {deleteProduct}=require("../controllers/product.controller");
const {getOneProduct}=require("../controllers/product.controller");
const {getWomenProducts}=require("../controllers/product.controller");
const {getMenProducts}=require("../controllers/product.controller");
const {getKidsProducts}=require("../controllers/product.controller");

router=express.Router();

router.post("/addProduct",addProducts)
router.get("/getAllProduct",getAllProduct)
router.put("/updateProduct/:_id",updateProduct)
router.delete('/deleteProduct/:_id', deleteProduct)
router.get("/getOneProduct/:_id", getOneProduct)
router.get("/getWomenProducts", getWomenProducts)
router.get("/getMenProducts", getMenProducts)
router.get('/getKidsProducts',getKidsProducts)


module.exports=router