import React, { useEffect, useState } from "react";
import axios from "axios";
import "./courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/courses/")
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <>
      <div className="title" id="courses">
        <div>our courses</div>
        <h3>Our Latest Courses</h3>
      </div>

      <div className="courses">
        <div className="container">
          {courses.map(course => (
            <div key={course.id} className="box">
              <div className="image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="content">
                <div className="time">
                  <p>{course.schedule}</p>
                  <p>{course.duration}</p>
                </div>
                <h2>{course.title}</h2>
                <button>read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
