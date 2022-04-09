import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar";

import PlayTableIcon from "../constants/icon/PlayTableIcon";
import AnswerBubble from "../constants/icon/AnswerBubble";
import { usePlayContext } from "../contexts/PlayContext";
import { getRandomInt, randomOperation, shuffle } from "../utils/util";
import { useNavigate } from "react-router-dom";

function PlayTime() {
  let navigate = useNavigate();

  const [FirstNumber, setFirstNumber] = useState(0);
  const [SecondNumber, setSecondNumber] = useState(0);
  const [Answers, setAnswers] = useState([]);

  const { addScore, increaseQuestionCounter, addCorrect, Questions } =
    usePlayContext();

  useEffect(() => {
    initNumbers();
  }, []);

  useEffect(() => {
    if (Questions === 7) {
      navigate("/final");
    }
  }, [Questions]);

  const handleAnswerClick = (e) => {
    if (e === FirstNumber * SecondNumber) {
      document.body.style.background = "#00BF63";
      setTimeout(function () {
        addScore(Math.ceil(Math.sqrt(e)));
        increaseQuestionCounter();
        addCorrect();
        initNumbers();
      }, 3000);
    } else {
      document.body.style.background = "#FA0000";
      setTimeout(function () {
        increaseQuestionCounter();
        initNumbers();
      }, 3000);
    }
  };

  const initNumbers = () => {
    document.body.style.background = "#2d2d2d";
    let numArr = [getRandomInt(0, 10), getRandomInt(0, 10)];
    setFirstNumber(numArr[0]);
    setSecondNumber(numArr[1]);

    let answers = [];

    answers.push(numArr[0] * numArr[1]);
    for (let i = 0; i < 2; i++) {
      answers.push(randomOperation(numArr));
    }

    setAnswers(shuffle(answers));
  };

  return (
    <div id="playWrapper" className="flex">
      <div id="playLeftSide" className="flex">
        <PlayTableIcon
          width="100%"
          height="80%"
          firstNumber={FirstNumber}
          secondNumber={SecondNumber}
        />
      </div>
      <div id="playRightSide" className="flex">
        <TopBar />
        <div id="answers">
          <AnswerBubble
            id="firstAnswer"
            width="10.573vw"
            number={Answers[0]}
            handleClick={handleAnswerClick}
          />
          <AnswerBubble
            id="secondAnswer"
            width="10.573vw"
            number={Answers[1]}
            handleClick={handleAnswerClick}
          />
          <AnswerBubble
            id="thirdAnswer"
            width="10.573vw"
            number={Answers[2]}
            handleClick={handleAnswerClick}
          />
        </div>
      </div>
    </div>
  );
}

export default PlayTime;
