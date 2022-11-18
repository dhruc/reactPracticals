import "./App.css";
import MiddleContainer from "./Componets/MIddleCotainer.js";
import myimage from './Componets/images/logo.jpg'
import Hello from "./Componets/Hello.js";
import Pay from "./Componets/Pay.js";
import Sub from "./Componets/Sub.js";


function App() {
  return (
    <div className="App">
     <header>
      <img className="logo" src={myimage} alt="photo"></img>
    <center> 
     <nav>
        <ul className="navi">
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </nav>
  </center>
    <a className="bg" href="#">Log in</a>
      </header>

      <div className="container">
          <div className="middle-part">
            <Hello/>
            <MiddleContainer/>
            <Sub/>
            {/* <Counter/> */}
            <Pay/>
          </div>
    </div>
  </div>
  );
  
}

export default App;
