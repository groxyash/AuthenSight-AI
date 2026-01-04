import { Link ,NavLink} from "react-router-dom";

function NavBar() {
  return (
    <div className="Header">
      <div className="header-Under">
        <button className="NavBarButton" ><img src="src\assets\sideBar.png" ></img></button>
        <Link to="/" id="AI-Name" ><h1>AuthenSightAI</h1></Link>
      </div>
      <div className="NavPages" >
          <NavLink to="/" id="navele"
            className={({isActive}) => `${isActive ? "isactive" : ""}`}
          >Home</NavLink>
          <NavLink to="/reports" id="navele" 
            className={({isActive}) => `${isActive ? "isactive" : ""}`}
          >Reports</NavLink>
          <NavLink to="/about" id="navele" 
            className={({isActive}) => `${isActive ? "isactive" : ""}`}
          >About Us</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
