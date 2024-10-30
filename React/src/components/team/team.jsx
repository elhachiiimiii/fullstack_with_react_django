import React, { useEffect, useState } from "react";
import axios from "axios";
import "./team.css";

const GymTrainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/trainers/")
      .then(response => {
        setTrainers(response.data);
      })
      .catch(error => {
        console.error('Error fetching trainers:', error);
      });
  }, []);

  return (
    <>
      <div className="title" id="team">
        <div>our team</div>
        <h3>Meet The Expert Team</h3>
      </div>

      <section className="team">
        <div className="container">
          {trainers.map(trainer => (
            <div key={trainer.id} className="box">
              <img src={trainer.image} alt={trainer.name} />
              <div className="info">
                <h4>gym trainer</h4>
                <p>{trainer.name}</p>
              </div>
              <div className="links">
                <a href={trainer.facebook} target="_blank"><i className="fab fa-facebook-f"></i></a>
                <a href={trainer.twitter} target="_blank"><i className="fab fa-twitter"></i></a>
                <a href={trainer.instagram} target="_blank"><i className="fab fa-instagram"></i></a>
                <a href={trainer.linkedin} target="_blank"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GymTrainers;
