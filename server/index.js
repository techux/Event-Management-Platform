const express = require('express');
require('dotenv').config();
const dbConnect = require("./dbConnect");
const logger = require("./utils/logger");
const PORT = process.env.PORT || 3000;

const authRoute = require("./routes/auth.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/ping", (req,res)=>{
    res.send("OK") ;
})

app.use("/auth", authRoute);

app.listen(PORT, "0.0.0.0", ()=>{
    logger.info(`Server started on port : ${PORT}`);
    dbConnect();
})