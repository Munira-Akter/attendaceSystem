import express, { urlencoded } from "express";
import DBconection from './config/db.js';
import { globalError } from './middleware/globalError.js';
import dotenv from 'dotenv'
import cors from "cors"
import routers from './routes/index.js'
dotenv.config();
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(routers)


// app route call
app.get('/health' , (_req,res)=>{
    res.send('ok')
});

app.use(globalError)

// app listen to server
app.listen(4040 , () => {
    console.log(`Server running on port 4040`)
    DBconection();
})









