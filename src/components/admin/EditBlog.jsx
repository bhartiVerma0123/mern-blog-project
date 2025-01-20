import React, { useEffect, useState } from "react";
import { AdminNavbar } from "./AdminNavbar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./admin.css"
import { Footer } from "../Footer";
export const EditBlog = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [blog_value, setBlogValue] = useState({
        "id": "",
        "blog_name":"",
        "blog_title": "",
        "description": ""
    }) 
    useEffect(()=>{
      axios.get(`http://localhost:4000/single_blog/${params.id}`).then((res)=>{
        setBlogValue(res.data.allBlogs);
      }).catch(()=>{
        console.log("error");
      })
    }, []);
   
    const inputHandler = (event) => {
        setBlogValue({...blog_value, [event.target.name]: event.target.value});
    }
    const update_blog = async (event) => {
        event.preventDefault();
        let res = await axios.post(`http://localhost:4000/updateBlog`,blog_value);
        console.log(res.data.status);
        if(res.data.status == "true"){
           alert(res.data.message);
           navigate('/manage_blog')
        } else {
            alert(res.data.message);
            navigate('/manage_blog')
        }

    }
  return (
    <>
      <AdminNavbar />
      <div className="container-fluid">
        <div className="alert mt-3 alert-primary">
            <h4>Edit Blog</h4>
        </div>
        <form onSubmit={update_blog}>
          <div className="mb-3 mt-3">
          <div className="image-input">
            <label htmlFor="bname" className="form-label mt-4">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="bname"
              placeholder="Enter Blog name"
              name="blog_name"
              value={blog_value.blog_name}
              onChange={inputHandler}
            /></div>
            <label htmlFor="btitle" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="btitle" value={blog_value.blog_title}
              placeholder="Enter Blog Title"
              name="blog_title" onChange={inputHandler}  />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description:
            </label>
            <textarea
              type="" 
              className="form-control"
              id="desc" rows="10" onChange={inputHandler}  value={blog_value.description}
              name="description"></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-dark">Edit Blog</button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
};
