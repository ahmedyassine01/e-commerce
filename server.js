const express=require('express');
const connect=require("./config/connectDb");
const connectDb = require('./config/connectDb');
const user=require('./routes/user');
const product=require("./routes/product");
const upload = require("./routes/upload");
const cart = require("./routes/cart")
const app=express();
connectDb()
app.use(express.json());
app.use("/user",user)
app.use("/product",product)
app.use("/upload",upload)
app.use("/cart",cart)


const PORT=process.env.PORT||6000;
app.listen(PORT,err=>err?console.log(err):console.log(`server is successfully running on PORT${PORT}`))