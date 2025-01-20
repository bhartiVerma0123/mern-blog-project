import React from "react";
import { Link } from "react-router-dom";

export const AdminNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <Link class="navbar-brand text-white" to="/dashboard">
            DASHBOARD
          </Link>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link text-white" to="/dashboard">
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Blogs
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/create_new_blog">
                      Create a Blog
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/manage_blog">
                      Manage Blog
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/home">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
