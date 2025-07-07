
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import ConnectCloudinary from './config/cloudinary.js'
import UserRouter from './routes/userRouter.js'
import productRouter from './routes/ProductRoute.js'

const app = express()
const port = process.env.PORT || 4000
connectDB() 
ConnectCloudinary()

app.use(express.json())
app.use(cors ())

app.use('/api/user', UserRouter)
app.use('/api/product', productRouter);


app.get('/', (req, res) => {
    res.send("api enable")
})

app.listen(port,()=>console.log("server start on port : "+ port))