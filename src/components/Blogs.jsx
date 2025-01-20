import React, { useEffect, useState } from "react";
import { AdminNavbar } from "./AdminNavbar";
import axios from "axios";
import { IoEyeSharp } from "react-icons/io5";
import { MdModeEdit, MdDeleteOutline } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

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
      <div className="container">
        <div className="alert alert-dark mt-4">
          <h4>All Blogs</h4>
        </div>
        <div className="row ">
          {blogs &&
            blogs.map((items, index) => {
              return (
                <div
                  className="manage-blog col-lg-3 col-md-4 col-sm-6 col-12 justify-content-center mb-4"
                  key={index}
                >
                  <div className="card custom-card">
                    <img
                      src={`http://localhost:4000/${items.photo}`}
                      alt=""
                      className="card-img-top"
                    />
                    <div className="card-body text-center">
                      <h6>{items.blog_name}</h6>
                      <h4 className="card-title fs-5 fw-bold">
                        {items.blog_title.slice(0, 20)}
                      </h4>
                      <p className="card-text">
                        {items.description.slice(0, 100)}...
                      </p>
                      <div className="icons fs-4 fw-bold">
                        <IoEyeSharp
                          className="action_icons view-icon"
                          onClick={() => ViewBlog(items._id)}
                        />
                        <MdModeEdit
                          className="action_icons edit-icon"
                          onClick={() => editBlog(items._id)}
                        />
                        <MdDeleteOutline
                          onClick={() => deleteBlog(items._id)}
                          className="action_icons delete-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
