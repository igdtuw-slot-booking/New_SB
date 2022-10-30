import styled from "styled-components";
import '../../pages/loginadmin/loginadmin.css';
import Input from "../../pages/loginadmin/Input";
import Button from "../../pages/loginadmin/Button";

function App(){
    return <div className="loginpage">

    <div className="leftside">
      <div className="loginAdminContent">
        <h1 className="loginAdminText">Are you</h1>
        <h1 className="loginAdminText">an Admin?</h1>
        <button className="admin">Admin Login</button>
      </div>
    </div>
    <div className="ellipse1">
    </div>
    <MainContent>
      <Helloadmin>Hello Student!!</Helloadmin>
      <InputContainer>
      <Input type="text"  placeholder="Email" />
      <Input type="password"  placeholder= "Password" />
      <Input type="password"  placeholder= "Confirm Password" />
      </InputContainer>
      <Forgotpassword>forgot password?</Forgotpassword>
      <ButtonContainer className="buttoncontainer">
        <Button content="Login" />
      </ButtonContainer>
     <HorizontalRule/>
     <Register><a href="">Register Here</a></Register>
     <ButtonContainer>
      <Button content= "Sign Up"/>
     </ButtonContainer>
    </MainContent>
    </div>
}
   const MainContent = styled.div`
            
            box-sizing:border-box;

            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items : center;
            padding:10px 30px;
            position:absolute;
            width:27vw;
            height: 40vw;
            left:870px;
            top:50px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0.14) 100%);
            border: 1px solid rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(15px);
            border-radius:40px;
          `;
  const Helloadmin = styled.h2`
           margin: 3rem 0 2rem 0;
           color:#390479;
           font-weight: bold;
       `;

  const InputContainer = styled.div`
           display: flex;
           flex-direction:column;
           justify-content: center;
           align-items: center;
           padding:20px 30px;
           gap:10px;
           color:#390479;
           width: 120%;
           height:24%; 
           border-radius: 50px;
     `;
  
 const Forgotpassword =styled.h5`
             margin:2rem;
             cursor :pointer;  
             align-items:center;
             justify-content:center;
             color:#390479;
             font-weight: bold;
     `;

  const ButtonContainer= styled.div`
          display: flex;
          justify-content:center;
          align-items: center;
          color:#390479;
          gap:10px;
          width: 120%;
          height:24%;
  `;
  
  const HorizontalRule = styled.hr`
         position:relative;
         width:90%;
         height:0.5rem;
         border-radius:black;
         background:#24014E;
  `;

  const Register= styled.div`
          display:flex;
          justify-content:center;
          align-items: center;
          width: 140%;
          height:30%;
          color:#390479;
          font-size:large;
  `;
export default App;

