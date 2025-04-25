import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`DB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Failed to connect to Mongo DB: ${error}`)
        process.exit(1) // Exit with failure
    }
}

export default connectDB
