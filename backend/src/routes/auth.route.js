import express from "express"


const router=express.Router();

router.get("/signup",(req,res)=>{
    res.status(200).json({message: "Signup endpoint"})
})

router.get("/login",(req,res)=>{
    res.status(200).send("login endpoint")
})

router.get("/logout",(req,res)=>{
    res.status(200).send("logout endpoint")
})


export default router;