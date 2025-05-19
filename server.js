import express from "express";
import dotenv from "dotenv";
import "./Database/db.js";
import router from "./Routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();


// CRATING AN EXPRESS APP
const app=express();
app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded());
const corsOptions={
  // origin: "https://srbosss.com",
  origin:"http://localhost:5173",
  // origin:"*",
  credentials: true,
  allowedHeaders: [
    "set-cookie",
    "Content-Type",
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Credentials",
    "x-xsrf-token"
  ],
}
app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));
app.use(router);
const port=process.env.PORT || 8000

// CRATONG A SERVER

app.listen(port,()=>{
    console.log("server started succesfully");
});




