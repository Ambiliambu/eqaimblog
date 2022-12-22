const mongoose=require('mongoose')

const blogSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesXh9yoqv-yHLk-J5i8qf24do8PbPnDywTaO5R7lsDw&s"
    },
    content:{
        type:String,
        require:true
    }
    
})

const Blog=mongoose.model("Blog",blogSchema)

module.exports={Blog}