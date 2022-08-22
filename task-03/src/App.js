import Menu from "./components/Menu";
import styled from 'styled-components';
import Home1 from "./components/Home1";
import image from "./img/bg2.jpg"
import Home2 from "./components/Home2";
import img from "./img/bg3.png"
import Footer from "./components/Footer";
import Awwards from "./components/Awwards";
import Arrow from "./components/Arrow";
import React from "react";
const App = () => {
  const BgOne = styled.div`
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;`;
  const BgTwo = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;`;
  return (
    <React.Fragment>
      <BgOne className="bg-scroll">
        <Menu />
        <Home1 />
      </BgOne>
      <div className="bg-neutral-900">
        <Home2 />
        <Awwards />
        <Arrow />
        <BgTwo>
          <Footer />
        </BgTwo>
      </div>
    </React.Fragment>
  );
}

export default App;
