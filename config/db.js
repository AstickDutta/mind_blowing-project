import mongoose from "mongoose"
import colors from "colors"


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(colors.bold.bgYellow(`Connected ToMongoodb Database${mongoose.connection.host}`))

    }catch(error){
        console.log(colors.bold.bgRed(`Mongoodb Database Error ${error}`))

    }
}

export default connectDB