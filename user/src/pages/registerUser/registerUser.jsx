import styled from "styled-components";
import Input from "../../pages/registerUser/Input";
import Button from "../../pages/registerUser/Button";
import '../../pages/registerUser/Registeruser.css';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function App() {
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(null);

    const registerHandler = async (e) => {
      e.preventDefault();
  
      try {
        const res = await fetch("http://localhost:8877/api/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            //"Access-Control-Allow-Origin": "*", // Required for CORS support to work
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
          credentials: "include",
          mode: "cors",
        });
        const data = await res.json();
        if (data.success === true) {
          toast.success("Registration Successful");
          setError(null);
          navigate("/loginuser");
        } if (data.success !== true) {
          setError(data.message);
          toast.error(data.message);
        }
      } catch (error) {
        setError('An unexpected error occurred');
        toast.error("Registration Failed-An unexpected error occurred");
      }
    };

  return (
    <div className="reg_page_student">

<div className="reg_page_leftside">
  <div className="reg_page_content">
    <h1 className="reg_page_text">Are you</h1>
    <h1 className="reg_page_text">an Admin?</h1>
    <button className="reg_page_admin">Admin Login</button>
  </div>
</div>
<div>
  <form method="POST" onSubmit={registerHandler}>
<div className="reg_page_Maincontent">
  <div className="reg_page_Helloadmin">Hello Student!!</div>
  <div className="reg_page_InputContainer">
    <Input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)}/>  
    <Input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
    <Input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
    
  </div>
  <div className="reg_page_Forgotpassword"><Link to="/forgot/password">
              <p>Forgot Password</p>
            </Link></div>
  <div className="reg_page_buttoncontainer">
    <Button content="Register" type="submit" />
  </div>
  <HorizontalRule />
  <div className="reg_page_Register">Already Have an Account?</div>
  
  <div className="reg_page_buttoncontainer">
  <Link to="/loginuser">
              <p>Login</p>
            </Link>
  </div>
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