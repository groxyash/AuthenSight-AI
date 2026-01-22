import { useParams, useNavigate } from "react-router-dom";
import "./Profile.css";
import details from "./Card/details";
import { useState } from "react";
import img2 from './Card/Images/imageRishik.jpeg'
import img3 from './Card/Images/imageYash.jpeg'
import linkdinLogo from './handleImages/LinkedIn.svg'
import codeforcesLogo from './handleImages/Codeforces_logo.png'
import githubLogo from './handleImages/githubImage.png'

function Profile() {
  const images = [
    {
    name: "Aman",
    img: img2
  },{
    name: "Rishik",
    img: img2
  },{
    name: "Yash",
    img: img3
  }
]
  const { id } = useParams();
  const navigate = useNavigate();
  const [i,seti] = useState({})
  const result = details.filter(item => item.name === id)
  const image = images.filter(item => item.name === id)

  return (
    <div className="profile-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="profile-card">
        <h1 className="profile-title">Profile Details</h1>
        <img src={image[0].img} alt=""
        className="profile-image"
        />
        <h1 className="profile-name">{result[0].fullname}</h1>
        <div className="logo-div">
          <a href={result[0].github}>
            <img src={linkdinLogo} alt="" className="logo"/>
          </a>
          <a href={result[0].github}>
            <img src={codeforcesLogo} alt="" className="logo"/>
          </a>
          <a href={result[0].github}>
            <img src={githubLogo} alt="" className="logo"/>
          </a>
          {/* <a href={result[0].github}>
            <img src={linkdinLogo} alt="" className="logo"/>
          </a> */}
        </div>

        <p className="profile-description">
          {result[0].about}
        </p>
      </div>
    </div>
  );
}

export default Profile;
