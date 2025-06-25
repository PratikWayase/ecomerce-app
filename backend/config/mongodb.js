
import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Db Connected")
    })
    
    await mongoose.connect(`${process.env.MONGODB_URL}/E-COMMERCE`)
}

export default connectDB;