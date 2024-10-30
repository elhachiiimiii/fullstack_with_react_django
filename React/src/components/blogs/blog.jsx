import React, { useEffect, useState } from "react";
import axios from "axios";
import "./blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/blogs/")
      .then(response => {
        console.log('Data fetched successfully:', response.data); // Debugging line
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <>
      <div className="title" id="blogs">
        <div>our blogs</div>
        <h3>Our Daily Posts</h3>
      </div>
      <section className="blogs">
        <div className="container">
          {blogs.length === 0 ? (
            <p>No blogs available</p>
          ) : (
            blogs.map(blog => (
              <div className="box" key={blog.id}>
                <div className="image">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="info">
                  <h2>{blog.title}</h2>
                  <div>
                    <p>{new Date(blog.date).toLocaleDateString()}</p>
                    <p>By {blog.author}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
