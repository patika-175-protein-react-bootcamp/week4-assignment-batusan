import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Icons
import MathIcon from "../constants/icon/MathIcon";
import StartIcon from "../constants/icon/StartIcon";

function Home() {
  let navigate = useNavigate();

  const [Score, setScore] = useState(0);
  const [QuestionCount, setQuestionCount] = useState(0);
  const [CorrectCount, setCorrectCount] = useState(0);

  useEffect(() => {
    const resultsData = JSON.parse(localStorage.getItem("results"));
    if (resultsData) {
      setScore(resultsData[0].score);
      setQuestionCount(resultsData[0].questionCount);
      setCorrectCount(resultsData[0].correctCount);
    }
  }, []);

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
        <div className="font">Total Point: {Score}</div>
        <div className="font">Total Questions: {QuestionCount}</div>
        <div className="font">Correct Answers: {CorrectCount}</div>
        <StartIcon
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          width="100%"
          height="100%"
          text="Start"
          x="170"
          y="90"
          color="white"
        />
      </div>
    </div>
  );
}

export default Home;
