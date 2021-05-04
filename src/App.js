import React from "react"
import './App.scss';
import Header from "./components/header/header";
import LandingPage from "./components/landingPage/landingPage";
import Article from "./components/article/article"
import Footer from "./components/footer/footer";

class App extends React.Component {
  render(){
  return (
    <div className="">
      <div className="heightofdiv">
        <div style={{zIndex:`10`, position:`relative`}}>
        <Header />
        </div>
        <LandingPage />
      </div>
      <Article />
      <div>
      </div>
      
      <div className="position-bottom content-wrapper">
      <hr />
      <Footer />
      </div>
      
    </div>
  );
}
}

export default App;
