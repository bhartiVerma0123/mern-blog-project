import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Layout } from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { Login } from './pages/Login'
import { AdminDashboard } from './components/admin/AdminDashboard'
import { CreateNewBlog } from './components/admin/CreateNewBlog'
import { ManageBlog } from './components/admin/ManageBlog'
import { ViewBlog } from './components/admin/ViewBlog'
import { EditBlog } from './components/admin/EditBlog'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Layout/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blogs' element={<Blog/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<AdminDashboard/>}></Route>
        <Route path='/create_new_blog' element={<CreateNewBlog/>}></Route>
        <Route path='/manage_blog' element={<ManageBlog/>}></Route>
        <Route path='/view_blog/:id' element={<ViewBlog/>}></Route>
        <Route path='/edit_blog/:id' element={<EditBlog/>}></Route>
        <Route path='/logout' element={<Layout/>}></Route>
        {/* <Route path='/blogs/:id' element={<BlogDetail/>}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
