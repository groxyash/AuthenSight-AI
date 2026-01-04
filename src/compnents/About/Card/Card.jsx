import React from 'react'
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ imgSrc, title, subtitle, description, profileId }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-image" />

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <h4 className="card-subtitle">{subtitle}</h4>
        <p className="card-description">{description}</p>

        <Link to={`/profile/${profileId}`} className="card-link">
          View Profile →
        </Link>
      </div>
    </div>
  );
}

export default Card;



