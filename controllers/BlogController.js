const { response, request } = require("express");
const {BlogModel} = require("../models/blogmodel");
const BlogController = async (req, res) => {
    try {
        //console.log(req.file); 
        if (!req.body.blog_title || !req.body.description || !req.body.blog_name||!req.file) {
            return res.status(400).json({ message: "Missing required fields", success: false });
        }
        const query = new BlogModel({
            blog_title: req.body.blog_title,
            description: req.body.description,
            blog_name:req.body.blog_name,
            photo: req.file.path, 
        });

        const result = await query.save();

        res.status(200).json({ message: "Blog successfully created", success: true });
    } catch (error) {
        console.error("Error while creating blog:", error);
        res.status(500).json({ message: "Server error", success: false });
    }
};

// manage controller
const ManageController = async (req,res) =>{
   try {
    let data = await BlogModel.find({});
    res.json({blogData: data});
   } catch (error) {
    res.json({message: "error"});
   }
}
// single blog
const SingleBlogController = async (req, res) => {
    try {
        let result =  await BlogModel.findById({_id: req.params.blogId});
        res.json({allBlogs: result});
    } catch (error) {
        res.json({message: "error"});
    }
} 

// Update Blog
const UpdateController =  async (req, res) => {
    try {
        let result = await BlogModel.findByIdAndUpdate({_id: req.body._id}, {blog_title: req.body.blog_title, description: req.body.description , blog_name:req.body.blog_name});
        if(result){
            res.json({message: "Blog Successfully Updated..", status: true});
        }
        else{ 
            res.json({message: "Error", status: false});
        }

    } catch (error) {
        
    }
}

// delete controller
const DeleteController = async (req,res)=>{
    
    let result = await BlogModel.findByIdAndDelete({_id:req.params.sid})
    //console.log(req.params.id)
    try{
        if(result){
            res.json({message:"blog deleted successfully" , status:true})
        } else{ 
            res.json({message: "Error", status: false});
        }

    } catch (error) {
        console.log(error)
        
    }
 }


module.exports = {BlogController, ManageController, SingleBlogController, UpdateController ,DeleteController};