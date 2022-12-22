const express=require('express');
const { getBlog, createBlog, getBlogs } = require('../controller/blogController');
const router=express.Router()

router.get('/getblogs',getBlogs)
router.post('/postblog',createBlog)
router.get('/getblog/:Id',getBlog)



module.exports=router;