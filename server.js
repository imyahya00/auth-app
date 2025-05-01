import app from './index.js'
import connectDB from './config/db.js'
import config from './config/environment.js'

connectDB()

//SERVER create
const port = config.port || 5000;
app.listen(port, '0.0.0.0' ,() => {
    console.log("server has started")
})