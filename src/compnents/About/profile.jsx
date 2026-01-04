import { useParams, useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="profile-card">
        <h1 className="profile-title">Profile Details</h1>
        <p className="profile-id">Profile ID: {id}</p>

        <p className="profile-description">
          This page shows full information related to the selected card.
          You can fetch data from an API using this ID.
        </p>
      </div>
    </div>
  );
}

export default Profile;
