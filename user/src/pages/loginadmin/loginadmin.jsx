import '../../pages/loginadmin/loginadmin.css';
import Input from "../../pages/loginadmin/Input";
import Button from "../../pages/loginadmin/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import React, { useState } from "react";


function App() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8877/api/user/login/admin", {
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
        navigate("/admin");
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
    <div className="admin_page_student">

<div className="admin_page_leftside">
  <div className="admin_page_content">
    <h1 className="admin_page_text">Are you</h1>
    <h1 className="admin_page_text">a Student?</h1>
    <button className="admin_page_admin"><a href='/loginuser'>Student Login</a></button>
  </div>
</div>
<div>
<form method="POST" onSubmit={loginHandler}>
<div className="admin_page_Maincontent">
  <div className="admin_page_Helloadmin">Hello Admin!!</div>
  <div className="admin_page_InputContainer">
    <Input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
    <Input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
    
  </div>
  <div className="admin_page_Forgotpassword"><Link to="/forgot/password">
              <p>Forgot Password</p>
            </Link></div>
  <div className="admin_page_buttoncontainer">
    <Button content="Login"  type="submit" />
  </div>
</div>
{error && <p>{error}</p>}
</form>
</div>
    </div>  

  );
}
export default App;

