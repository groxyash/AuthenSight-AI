import React from 'react'
import { Link } from "react-router-dom";
import "./Card.css";
import details from './details';

function Card({ name, fullname, github, cardContent, about, profileImage }) {
  return (
    <Link to={`/profile/${name}`} className="card-link">
      <div className="card">
        <img src={new URL(`./Images/${profileImage}`, import.meta.url).href} alt={name} className="card-image" />

        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <h4 className="card-subtitle">{cardContent}</h4>
          <h4 className='card-about'>{about}</h4>
          {/* <p className="card-description"></p> */}

          
            {/* View Profile → */}
        </div>
      </div>
    </Link>
  );
}

export default Card;



