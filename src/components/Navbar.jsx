import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            BLOG APP
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link text-white" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/blogs">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
