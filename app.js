import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import mongoose from 'mongoose'
import {URL_ENCODE,REQUEST_TIME,REQUEST_NUMBER,MAX_JSON_SIZE, WEB_CACHE, DATABASE, PORT} from "./app/config/config.js"
import router from './routes/api.js'


const app = express()

// App use default Middleware
app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}))


app.use(express.urlencoded({extended:URL_ENCODE}))
app.use(helmet())

// App use limiter
const limiter = rateLimit({windowMs:REQUEST_TIME, max:REQUEST_NUMBER})
app.use(limiter)

// Cache 
app.set('etag', WEB_CACHE)

// Database Connect
mongoose.connect(DATABASE,{autoIndex:true}).then(()=>{
    console.log(`Monog DB Conneted !!`)
    
}).catch(()=>{
    console.log(`Mongodb IS Not Connected !!!`);
    
})

app.use("/api",router)

app.listen(PORT,()=>{
    console.log(`Server running at port: ${PORT}`);
    
})