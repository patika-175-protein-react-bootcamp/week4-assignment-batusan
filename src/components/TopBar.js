import React, { useEffect } from "react";
import { usePlayContext } from "../contexts/PlayContext";

function TopBar() {
  const { Tour, Score, QuestionCount } = usePlayContext();

  return (
    <div id="topBar" className="flex">
      <div className="font">Score : {Score}</div>
      <div className="font">Tour : {Tour}</div>
      <div className="font">Questions: {QuestionCount}/10</div>
    </div>
  );
}

export default TopBar;
