import "./landingpage.css";
import { Link } from "react-router-dom";

export default function landingpage() {
  return (
    <div className='landingpage'>
        <h1> Celestial Biscuit IGDTUW</h1>
        <div>
          <Link to="/"><h5>Home</h5></Link><h5>Home</h5>
          <h5>About</h5>
          <h5>Team</h5>
        </div>
        <div>
          <h4>Login as </h4>
          <Link to="loginadmin"><h5>Admin</h5></Link>
          <Link to="loginuser"><h5>Student</h5></Link>
        </div>
    </div>
  )
}
