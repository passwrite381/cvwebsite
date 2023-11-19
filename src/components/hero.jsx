import React from "react";
import LogoHero from "../assets/Capture001.jpg";

const Hero = () => {
    return (
      <main>
        <img
          src={LogoHero}
          className="img-fluid position-absolute"
          alt=""
          style={{ width: "100%" }} />
        <div
          className="text-white position-absolute top-50 translate-left"
          style={{ marginLeft: "80px" }}
        >
          <h1>Welcome</h1>
          <p style={{ fontSize: "21px" }}>UTS Pemrograman Web</p>
          <p style={{ fontSize: "21px" }}>Syahbian Diaz Hamzah 202110370311381</p>
        </div>
      </main>
    );
  };
  
  export default Hero;
  