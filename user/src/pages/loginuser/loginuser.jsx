import styled from "styled-components";
import Input from "../../pages/loginuser/Input";
import Button from "../../pages/loginuser/Button_login";
import '../../pages/loginuser/loginuser.css';


function App() {

  return (
    <div className="login_page_student">

<div className="login_page_leftside">
  <div className="login_page_content">
    <h1 className="login_page_text">Are you</h1>
    <h1 className="login_page_text">an Admin?</h1>
    <button className="login_page_admin">Admin Login</button>
  </div>
</div>
<div>
<div className="login_page_Maincontent">
  <div className="login_page_Helloadmin">Hello Student!!</div>
  <div className="login_page_InputContainer">
    <Input type="text" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    
  </div>
  <div className="login_page_Forgotpassword">forgot password?</div>
  <div className="login_page_buttoncontainer">
    <Button content="Login" />
  </div>
  <HorizontalRule />
  <div className="login_page_Register">Register Here</div>
  <div className="login_page_buttoncontainer">
    <Button content="Sign Up" />
  </div>
</div>
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