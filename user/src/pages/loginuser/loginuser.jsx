import styled from "styled-components";
import Input from "../../pages/loginuser/Input";
import Button from "../../pages/loginuser/Button";
import '../../pages/loginuser/loginuser.css';
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8877/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: "include",
        mode: "cors",
      });
      const data = await res.json();
      if (data.success === true) {
        toast.success("Login Successful");
        setError(null);
        navigate("/user");
      } if (data.success !== true) {
        setError(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      setError('An unexpected error occurred');
      toast.error("Login Failed-An unexpected error occurred");
    }
  };

  return (
    <div className="login_page_student">

<div className="login_page_leftside">
  <div className="login_page_content">
    <h1 className="login_page_text">Are you</h1>
    <h1 className="login_page_text">an Admin?</h1>
    <button className="login_page_admin"><a href='/loginAdmin'>Admin Login</a></button>
  </div>
</div>

<div>
  <form method="POST" onSubmit={loginHandler}>
  <div className="login_page_Maincontent">
  <div className="login_page_Helloadmin">Hello Student!!</div>
  <div className="login_page_InputContainer">
    <Input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
    <Input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
    
  </div>
  <div className="login_page_Forgotpassword"><Link to="/forgot/password">
              <p>Forgot Password</p>
            </Link></div>
  <div className="login_page_buttoncontainer">
    <Button content="Login" type="submit" />
  </div>
  <HorizontalRule />
  <div className="login_page_Register">Register Here</div>
  <div className="login_page_buttoncontainer"><Link to="/registeruser">
              <p>Sign Up</p>
            </Link></div>
</div>
{error && <p>{error}</p>}
</form>
</div>
    </div>  

  );
}
const HorizontalRule = styled.hr`
         position:relative;
         width:90%;
        height:0.7rem;
         border-radius:black;
         background:#24014E;
         margin-bottom:0px;
  `;
export default App;