import React, { useEffect } from "react";
import ShortUnderline from "../constants/icon/ShortUnderline";
import { usePlayContext } from "../contexts/PlayContext";

function Final() {
  const { Score, CorrectCount, QuestionCount, Questions } = usePlayContext();
  useEffect(() => {
    console.log(Questions);
  }, [Questions]);

  return (
    <div id="playWrapper" className="flex">
      <div id="playLeftSide" className="flex">
        <div className="finalDiv flex">
          <ShortUnderline text="Final" x="50" y="-5" width="50%" height="40%" />
          <div className="font">Point: {Score}</div>
          <div className="font">Questions: {QuestionCount}</div>
          <div className="font">Correct Answers:{CorrectCount}</div>
        </div>
      </div>
      <div className="finalRight flex">
        <div className="finalDiv flex">
          <ShortUnderline
            text="All Scores"
            x="10"
            y="-5"
            width="60%"
            height="40%"
          />
          {Questions.map((element) => {
            return (
              <div>
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
