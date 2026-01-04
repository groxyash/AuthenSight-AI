import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="Header">
      <div className="header-Under">
        <button className="NavBarButton" ><img src="src\assets\sideBar.png" ></img></button>
        <Link to="/" id="AI-Name" ><h1>AuthenSightAI</h1></Link>
      </div>
      <div className="NavPages" >
          <Link to="/" id="navele">Home</Link>
          <Link to="/reports" id="navele" >Reports</Link>
          <Link to="/about" id="navele" >About Us</Link>
      </div>
    </div>
  );
}

export default NavBar;
