import styled from "styled-components";
import Input from "../../pages/loginuser/Input";
import Button from "../../pages/loginuser/Button";
import '../../pages/loginuser/loginuser.css';
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-dom";
import { loginUser } from "../../Actions/User";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password))
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
  <form onSubmit={loginHandler}>
  <div className="login_page_Maincontent">
  <div className="login_page_Helloadmin">Hello Student!!</div>
  <div className="login_page_InputContainer">
    <Input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
    <Input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
    
  </div>
  <div className="login_page_Forgotpassword">forgot password?</div>
  <div className="login_page_buttoncontainer">
    <Button content="Login" type="submit" />
  </div>
  <HorizontalRule />
  <div className="login_page_Register">Register Here</div>
  <div className="login_page_buttoncontainer">Sign up</div>
</div>
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