import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShortUnderline from "../constants/icon/ShortUnderline";
import StartIcon from "../constants/icon/StartIcon";
import { usePlayContext } from "../contexts/PlayContext";

function Final() {
  let navigate = useNavigate();

  const { Score, CorrectCount, QuestionCount, Questions, resetTour } =
    usePlayContext();

  useEffect(() => {
    const resultsData = JSON.parse(localStorage.getItem("results"));
    if (resultsData) {
      var results = [
        {
          score: resultsData[0].score + Score,
          correctCount: resultsData[0].correctCount + CorrectCount,
          questionCount: resultsData[0].questionCount + QuestionCount,
        },
      ];
      localStorage.setItem("results", JSON.stringify(results));
    } else {
      var results = [
        {
          score: Score,
          correctCount: CorrectCount,
          questionCount: QuestionCount,
        },
      ];
      localStorage.setItem("results", JSON.stringify(results));
    }
  }, [Score, CorrectCount, QuestionCount]);

  const handleClick = () => {
    resetTour();
    navigate("/");
  };

  return (
    <div id="playWrapper" className="flex">
      <div id="playLeftSide" className="flex">
        <div className="finalDiv flex">
          <ShortUnderline
            text="Final"
            x="50"
            y="-5"
            width="50%"
            height="40%"
            color="red"
          />
          <div className="font">Point: {Score}</div>
          <div className="font">Questions: {QuestionCount}</div>
          <div className="font">Correct Answers:{CorrectCount}</div>
          <StartIcon
            width="50%"
            text="Restart"
            x="140"
            y="90"
            color="white"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="finalRight flex">
        <div className="finalDiv flex">
          <ShortUnderline
            text="All Scores"
            x="10"
            y="-5"
            width="40%"
            height="200px"
            color="red"
          />
          {Questions.map((element) => {
            return (
              <div className="font"> 
                {element.question} - {element.result}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Final;
