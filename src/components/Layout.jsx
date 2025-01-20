import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Banner } from "./Banner";
import { categories } from "../Constant/data";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../reponsive/layout.css"

export const Layout = () => {
  const [post, setPost] = useState();
  const [visibleProducts , setVisibleProducts] = useState(5);
  const navigate = useNavigate();
  const fetchBlogs = async () => {
    let result = await axios.get("http://localhost:4000/manageblog");
    //console.log(result.data.blogData);
    setPost(result.data.blogData);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const showAll = ()=>{
    setVisibleProducts(post.length)
  }
  const navigateToCreateBlog = (categoryTitle) => {
    navigate(`/create_new_blog?category=${encodeURIComponent(categoryTitle)}`);
  };

  const ViewBlog = (bid) =>{
   navigate(`/view_blog/${bid}`)
  }
  return (
    <>
      <Header />
      <Banner/>
      <section id="blog-content">
      <h1 className="text-center fw-bold justify-content-center ">
      Latest Blogs</h1>
        <div className="blog-box">
            <div className="blog-left-data col-md-6 col-sm-12">
              {post && 
                post.slice(0,visibleProducts).map((items, index) => {
                  return (
                    <div className="blog-data d-flex col-md-12 col-sm-12"  onClick={()=>ViewBlog(items._id)} key={index}>
                    <div className="blog-image">
                    <img src={`http://localhost:4000/${items.photo}`} alt=""  />
                    </div>
                    <div className="di ">
                    <h6>{items.blog_name}</h6>
                      <h2 className="blog_title fw-bold m-2 text-black ">{items.blog_title}</h2>
                      <p className="blog_description m-2">{items.description.slice(0,100)}...</p>
                    </div>
                    </div>
                  );
                })
              }
              <div/>
              <div className="view-more">
              <button href="" onClick={showAll}>View All Blogs</button> 
              </div>
            </div>
            <div className="blog-right-data col-md-2 ">
              <h2 className="text-center">All Category</h2>
              { categories.map((category) => {
                return (
                  <div className="right-blog-box" >
                  <h4
                      onClick={() => navigateToCreateBlog(category.type)}
                      style={{ cursor: "pointer", color: "blue" }}
                    >
                      {category.type}
                    </h4>
                  </div>
                );
              })}
              <button className=" Btn m-4 text-white fs-5 fw-bold  rounded-2 p-2 d-grid gap-2  " onClick={() => navigate('./create_new_blog')}>
                Create Blogs
              </button>
            </div>
          </div>
        
      </section>
      <Footer />
    </>
  );
};
