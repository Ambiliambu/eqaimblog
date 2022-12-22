const {Blog}=require('../model/blogModel');


// // create blog

const createBlog=async(req,res)=>{
//  console.log("pppp",req.body);
 const content=req.body.map((value)=>{
   return value.text
 })
 console.log("oocontoo",content);
 const title=content.shift()
 console.log("otitlo",title);

 const para=content.join(' ').trim()
 console.log("oparto",para);
  try {
    const blog=await Blog.create({
        title,
        content:para,
        
     })
     console.log("ll",blog);
     res.status(201).json(blog)
  } catch (error) {
    res.status(400).json(error.message)
  }

 

}


// // get blogs

const getBlogs=async(req,res)=>{
 try {
    const blogs=await Blog.find().sort({_id:-1})
    // console.log("pp",blog);
    res.status(200).json(blogs)
 } catch (error) {
    res.status(400).json(error.message)
   
 }
}

// get blog

const getBlog=async(req,res)=>{

   try {
    // console.log("jjjj",req.params.Id);
    const blog=await Blog.findById({_id:req.params.Id})
    // console.log("lll",blog);
    res.status(200).json(blog)

   } catch (error) {
    res.status(400).json(error.message)

   }
}   



module.exports={
    createBlog,
    getBlogs,
    getBlog
}