import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../reponsive/blog.css";
import { Footer } from "../components/Footer";

export const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const fetchBlogs = async () => {
    let result = await axios.get("http://localhost:4000/manageblog");
    setBlogs(result.data.blogData);
    setFilteredBlogs(result.data.blogData); 
  };

  const filterBlogs = (blogName) => {
    if (blogName === "All") {
      setFilteredBlogs(blogs); 
    } else {
      const filtered = blogs.filter((blog) =>
        blog.blog_name.toLowerCase().includes(blogName.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };
  
  const ViewBlog = (bid) =>{
    navigate(`/view_blog/${bid}`)
   }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="hero-container">
        <div className="hero">
          <h1>Blog Your Way to Inspiration</h1>
          <p>Share Your Insights, Connect Through Your Blog</p>
        </div>
        <div className="blog-container">
          <div className="Blogs-category">
            <div className="nav">
              <ul className="d-flex">
                <li onClick={() => filterBlogs("Music")}>
                  <a href="#">Music</a>
                </li>
                <li onClick={() => filterBlogs("Sports")}>
                  <a href="#">Sports</a>
                </li>
                <li onClick={() => filterBlogs("Technology")}>
                  <a href="#">Technology</a>
                </li>
                <li onClick={() => filterBlogs("Movies")}>
                  <a href="#">Movies</a>
                </li>
                <li onClick={() => filterBlogs("News")}>
                  <a href="#">News</a>
                </li>
                <li onClick={() => filterBlogs("All")}>
                  <a href="#">All</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            {filteredBlogs &&
              filteredBlogs.map((items, index) => {
                return (
                  <div
                    className="manage-blog col-lg-3 col-md-4 col-sm-6 col-12 justify-content-center mb-4"
                    key={index}
                  >
                    <div className=" customs-card">
                    <div className="card-body text-center">
                      <img
                        src={`http://localhost:4000/${items.photo}`}
                        alt=""
                        className="card-img-top"
                      />
                        <h6>{items.blog_name}</h6>
                        <h4 className="card-title fs-5 fw-bold">
                          {items.blog_title.slice(0, 20)}
                        </h4>
                        <p className="card-text">
                          {items.description.slice(0, 100)}...
                        </p>
                        <a href="#" onClick={()=>ViewBlog(items._id)}>read more</a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
