import React, { useEffect } from "react";
import { usePlayContext } from "../contexts/PlayContext";
import { getRandomInt } from "../utils/util";

function TopBar() {
  const { Tour, Score, Questions } = usePlayContext();

  return (
    <div id="topBar" className="flex">
      <div className="font">Score : {Score}</div>
      <div className="font">Tour : {Tour}</div>
      <div className="font">Questions: {Questions}/7</div>
    </div>
  );
}

export default TopBar;
