// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// export const BlogDetail = () => {
//   const { id } = useParams();  // Get the blog ID from the URL
//   const [blogValue, setBlogValue] = useState({
//     "blog_title": "",
//     "description": ""
//   });

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         console.log(id);  // Add this to verify the ID
//         const response = await axios.get(`http://localhost:4000/single_blog/${id}`);
//         if (response.status === 200) {
//           setBlogValue(response.data.allBlogs);
//         } else {
//           console.log('Error fetching blog:', response.status);
//         }
//       } catch (error) {
//         console.error('Error fetching blog:', error);
//       }
//     };
//     fetchBlogs();
//   }, [id]);
  

//   return (
//     <div className="container">
//       <div className="alert mt-3 alert-primary">
//         <h4>View Blog</h4>
//       </div>
//       <div className="view-contain">
//       <img src={blogValue.photo} alt="" className="w-100 h-100"/>
//             <h4>{blogValue.blog_title}</h4>
//             <p className="head fs-4 fw-semibold m-4">{blogValue.description}</p>
//       </div>
//     </div>
//   );
// };
