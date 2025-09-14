import express from "express"
import dotenv from "dotenv"

const app=express()


dotenv.config();

const PORT =process.env.PORT||3000;

app.get("/api/auth/signup",(req,res)=>{
    res.status(200).json({message: "Signup endpoint"})
})

app.get("/api/auth/login",(req,res)=>{
    res.status(200).send("login endpoint")
})

app.get("/api/auth/logout",(req,res)=>{
    res.status(200).send("logout endpoint")
})

app.listen(PORT,()=>{
    
    console.log("Server is listening at port "+PORT);
})