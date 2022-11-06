import '../../pages/loginadmin/loginadmin.css';
import Input from "../../pages/loginadmin/Input";
import Button from "../../pages/loginadmin/Button";

function App() {

  return (
    <div className="admin_page_student">

<div className="admin_page_leftside">
  <div className="admin_page_content">
    <h1 className="admin_page_text">Are you</h1>
    <h1 className="admin_page_text">a Student?</h1>
    <button className="admin_page_admin">Student Login</button>
  </div>
</div>
<div>
<div className="admin_page_Maincontent">
  <div className="admin_page_Helloadmin">Hello Admin!!</div>
  <div className="admin_page_InputContainer">
    <Input type="text" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    
  </div>
  <div className="admin_page_Forgotpassword">forgot password?</div>
  <div className="admin_page_buttoncontainer">
    <Button content="Login" />
  </div>
</div>
</div>
    </div>  

  );
}
export default App;

