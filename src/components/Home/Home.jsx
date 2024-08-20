import React from "react";
import video2 from "../../assets/video2.mp4";
import takeOff from "../../assets/takeOff2.png";

const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video2} autoPlay muted loop className="video"></video>
          <img src={takeOff} alt="airplane" className="plane" />
        </div>
      </div>
    </div>
  );
};

export default Home;
