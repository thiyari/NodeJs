const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser")
const path = require("path");

const connectDB = require("./server/database/connection");

const app = express();

// Using Contentt Security Policy
app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
    );
    next();
  });

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

//log requests
app.use(morgan('tiny'));

// mongo connecction
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

// load routers
app.use('/',require('./server/routes/router'))

app.listen(3000,()=>{console.log(`Server is running on http://localhost:${PORT}`)});