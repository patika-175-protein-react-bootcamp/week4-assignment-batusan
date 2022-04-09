import React from "react";
import { Link, useNavigate } from "react-router-dom";

//Icons
import MathIcon from "../constants/icon/MathIcon";
import StartIcon from "../constants/icon/StartIcon";

function Home() {
  let navigate = useNavigate();

  function handleClick(e) {
    navigate("/play-time");
  }

  function handleMouseEnter(e) {}

  return (
    <div className="flex welcomepage">
      <div className="centerDiv flex">
        <MathIcon
          height="100%"
          width="100%"
          textColor="#FF0000"
          underlineColor="#FF0000"
        />
        <div className="font">Total Point: 129</div>
        <div className="font">Total Questions: 40</div>
        <div className="font">Correct Answers: 32</div>
        <StartIcon
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default Home;
