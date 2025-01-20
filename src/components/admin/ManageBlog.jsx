import React, { useEffect, useState } from "react";
import { AdminNavbar } from "./AdminNavbar";
import axios from "axios";
import { IoEyeSharp } from "react-icons/io5";
import { MdModeEdit, MdDeleteOutline } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import "./admin.css";
import { Footer } from "../Footer";
export const ManageBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    let result = await axios.get("http://localhost:4000/manageblog");
    //console.log(result.data.blogData);
    setBlogs(result.data.blogData);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  const ViewBlog = (bid) => {
    navigate(`/view_blog/${bid}`);
  };
  const editBlog = (bid) => {
    navigate(`/edit_blog/${bid}`);
  };

  const deleteBlog = async (id) => {
    if (!id) {
      console.error("Blog ID is undefined");
      return;
    }

    try {
      await axios.delete(`http://localhost:4000/delete_blog/${id}`);
      //console.log("Blog deleted successfully");
      alert("deleted successfully");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container-fluid d-flex flex-column">
        <div className="alert alert-primary mt-4 text-center fw-bold">
          <h4>All Blogs</h4>
        </div>
        <div className="row">
          {blogs &&
            blogs.map((items, index) => (
              <div className=" cols col-lg-3 col-md-4 col-sm-6 mt-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <img
                      src={`http://localhost:4000/${items.photo}`}
                      alt="Blog"
                      className="img-fluid custom-img"
                    />
                    <h6 className="text-center fs-light">{items.blog_name}</h6>
                    <h4 className="card-title fs-5 fw-bold mt-3 text-center">
                      {items.blog_title}...
                    </h4>
                    <p className="card-text text-center fs-6">
                      {items.description.slice(0, 100)}...
                    </p>
                    <div className="icons fs-4 fw-bold d-flex justify-content-around mt-3">
                      <IoEyeSharp
                        className="action-icons view-icon"
                        onClick={() => ViewBlog(items._id)}
                      />
                      <MdModeEdit
                        className="action-icons edit-icon"
                        onClick={() => editBlog(items._id)}
                      />
                      <MdDeleteOutline
                        onClick={() => deleteBlog(items._id)}
                        className="action-icons delete-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};
