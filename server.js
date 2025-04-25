import dotenv from 'dotenv'
dotenv.config({path: './config.env'});

import app from './index.js'
import connectDB from './config/db.js'

connectDB()

//SERVER create
const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0' ,() => {
    console.log("server has started")
})