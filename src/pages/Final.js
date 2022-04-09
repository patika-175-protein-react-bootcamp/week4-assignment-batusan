import React from "react";
import ShortUnderline from "../constants/icon/ShortUnderline";
import { usePlayContext } from "../contexts/PlayContext";

function Final() {
  const { Score, CorrectCount, Questions } = usePlayContext();

  return (
    <div id="playWrapper" className="flex">
      <div id="playLeftSide" className="flex">
        <div id="finalDiv" className="flex">
          <ShortUnderline width="50%" height="40%" />
          <div className="font">Point: {Score}</div>
          <div className="font">Questions: {Questions}</div>
          <div className="font">Correct Answers:{CorrectCount}</div>
        </div>
      </div>
      <div id="playRightSide" className="flex"></div>
    </div>
  );
}

export default Final;
