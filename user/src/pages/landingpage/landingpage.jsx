import '../../pages/landingpage/landingpage.css';
import Header from "../../pages/landingpage/Header";
import NavBar from "../../pages/landingpage/LandingNavBar";
import Content from "../../pages/landingpage/Content";

function App(){
  return (
    <div className= "landingpage">
    <Header/>
    <NavBar/>
    <Content/>
    </div>
  )
}

export default App;
