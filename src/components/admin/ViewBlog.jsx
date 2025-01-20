import React, { useEffect, useState } from "react";
import { AdminNavbar } from "./AdminNavbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Footer} from "../../components/Footer"
import "./admin.css";
export const ViewBlog = () => {
  const params = useParams();
  const [blog_value, setBlogValue] = useState({
    blog_name: "",
    blog_title: "",
    description: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:4000/single_blog/${params.id}`)
      .then((res) => {
        setBlogValue(res.data.allBlogs);
      })
      .catch(() => {
        console.log("error");
      });
  }),
    [params.id];

  // const inputHandler = (event) => {
  //     setBlogValue({...blog_value, [event.target.name]: event.target.value});
  // }
  return (
    <>
      <AdminNavbar />
      <div className="container-fluid">
          <div className="banner-overlay d-flex justify-content-center align-items-center">
            <h1 className="text-black fw-bold">Category Blog</h1>
          </div>
        </div>
        <div className="view-container mx-auto" style={{ maxWidth: "800px" }}>
          <div className="view-content">
            <img
              src={`http://localhost:4000/${blog_value.photo}`}
              alt="Blog"
              className="view-image img-fluid rounded"
            />
            <div className="text-overlay mt-3">
              <h6 className="text-center">{blog_value.blog_name}</h6>
              <h4 className="text-center fw-bold fs-2">{blog_value.blog_title}</h4>
              <p className="para fs-5 fw-semibold text-center">
                {blog_value.description}
              </p>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  );
};
