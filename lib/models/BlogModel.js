const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
    title:{
        type: String,required:true
    },
    description:{
        type: String,required:true
    }, 
    category:{
        type: String, required:true
    },
    author:{
        type: String,required:true
    }, 
    image:{
        type: String,required:true
    }, 
    // authorImage:{
    //     type: String,required:true
    // }, 
    date:{
        type: Date,
        default: Date.now()
    }
})

export const BlogModel = mongoose.models.blog || mongoose.model('blog',BlogSchema)