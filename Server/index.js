
import express, { response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDB from './config/connectDB.js'

const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy : false
}))

app.get("/",(request,response)=>{
    response.json({
        message : "Server is running at PORT : " + PORT
    })
})
connectDB();
const PORT = 8080 || process.env.PORT 
app.listen(PORT, () =>{
    console.log("Server is running ",PORT);
})
