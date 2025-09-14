import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/auth.route.js"
import messageRouter from "./routes/message.route.js"

const app=express()


dotenv.config();

const PORT =process.env.PORT||3000;

app.use("/api/auth",authRouter)
app.use("/api/message",messageRouter)


app.listen(PORT,()=>{
    
    console.log("Server is listening at port "+PORT);
})