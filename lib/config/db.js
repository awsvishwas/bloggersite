import mongoose from "mongoose";

export const connectDB = async()=>{

    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/bloggerdb')
        console.log('DB Connected.')
    }
    catch(error){
        console.log('Error while connecting DB')
    }
   
}