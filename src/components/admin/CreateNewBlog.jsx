import React, { useState } from "react";
import { AdminNavbar } from "./AdminNavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer";
export const CreateNewBlog = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [blog_value, setBlogValue] = useState({
    blog_name: "",
    blog_title: "",
    description: "",
  });
  const inputHandler = (event) => {
    setBlogValue({ ...blog_value, [event.target.name]: event.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file); // Logs the file immediately
  };

  const add_blog = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("photo", image);
    formData.append("blog_name", blog_value.blog_name);
    formData.append("blog_title", blog_value.blog_title);
    formData.append("description", blog_value.description);
    console.log(
      "FormData:",
      formData.get("photo"),
      formData.get("blog_name"),
      formData.get("blog_title"),
      formData.get("description")
    );

    try {
      const res = await axios.post("http://localhost:4000/addblog", formData);
      if (res.data.status === true) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
      }
      setBlogValue({ blog_name: "", blog_title: "", description: "" });
      setImage("");
    } catch (error) {
      console.error("Error uploading blog:", error);
      alert("Failed to create blog. Please try again.");
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="view-container">
        <div className="alert mt-3 alert-primary w-100">
          <h4>Create New Blog</h4>
        </div>
        <form onSubmit={add_blog} method="post" action="#">
          <div className="mb-3 mt-3">
            <div className="image-input">
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handleImageChange}
              />
            </div>
            <div>
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
            <label htmlFor="btitle" className="form-label mt-4">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="btitle"
              placeholder="Enter Blog Title"
              name="blog_title"
              onChange={inputHandler}
              value={blog_value.blog_title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" class="form-label">
              Description:
            </label>
            <textarea
              type=""
              class="form-control"
              id="desc"
              rows="10"
              placeholder="Enter description"
              name="description"
              onChange={inputHandler}
              value={blog_value.description}
            ></textarea>
          </div>
          <input type="submit" value="Create Blog" class="btn btn-primary" />
        </form>
      </div>
      <Footer/>
    </>
  );
};
