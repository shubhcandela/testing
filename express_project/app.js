// const express = require('express');
// const app = express();

// let data = require("./data")


// const bodyParser = require('body-parser');
// const cors = require('cors');
 
// const port = 3000; 

// app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
 
// app.get('/data',(req,res)=>{
//     res.send(data)
// })

// app.post('/data', (req, res) => {
//   const datatoadd = req.body
//   console.log(datatoadd)
  
//   data = datatoadd
//     res.send(data)
// });
 
// app.listen(3000, () => {
//   console.log('Our express server is up on port 3000');
// });
import express from "express";
import dotenv from "dotenv";
import router from "./routes/route.js"
import cors from "cors";

//config env
dotenv.config();

//rest obj
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
router.use(cors());

//routes
app.use("/",router);

app.get("/",(req,res)=>{
    res.send(
        "<h1>Welcome to the App</h1>"
    )
})

//rest port 
const PORT = process.env.PORT || 8090;

//start listen
app.listen(PORT, ()=>{
    console.log(`server is running on ${process.env.PORT} in ${process.env.DEV_MODE}`)
})