import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar";

import PlayTableIcon from "../constants/icon/PlayTableIcon";
import AnswerBubble from "../constants/icon/AnswerBubble";
import { usePlayContext } from "../contexts/PlayContext";
import {
  getRandomInt,
  isUnique,
  randomOperation,
  shuffle,
} from "../utils/util";
import { useNavigate } from "react-router-dom";

function PlayTime() {
  let navigate = useNavigate();

  const [FirstNumber, setFirstNumber] = useState(0);
  const [SecondNumber, setSecondNumber] = useState(0);
  const [Answers, setAnswers] = useState([]);
  const [isDisable, setDisable] = useState(false);

  const {
    addScore,
    increaseQuestionCounter,
    addCorrect,
    QuestionCount,
    addQuestionResult,
  } = usePlayContext();

  useEffect(() => {
    initNumbers();
  }, []);

  useEffect(() => {
    if (QuestionCount === 10) {
      navigate("/final");
    }
  }, [QuestionCount]);

  const handleAnswerClick = (e, number) => {
    if (!isDisable) {
      setDisable(true);
      if (number === FirstNumber * SecondNumber) {
        document.body.style.background = "#00BF63";

        /*fill black to selected answer
        Array.from(e.target.childNodes).map((nodes) => {
          if (nodes) {
            nodes.setAttribute("fill", "black");
          }
        });
        */

        setTimeout(function () {
          addScore(Math.ceil(Math.sqrt(number)));
          increaseQuestionCounter();
          addCorrect();
          addQuestionResult({
            question: `${FirstNumber} x ${SecondNumber}`,
            result: "✔",
          });

          /*Change fill color to white
          Array.from(e.target.childNodes).map((nodes) => {
            nodes.setAttribute("fill", "white");
          });
          */

          initNumbers();
        }, 3000);
      } else {
        document.body.style.background = "#FA0000";

        let numb = document.getElementById("answers").childNodes;
        let correctNode;

        Array.from(numb).map((num) => {
          //Correct Result Match
          if (num.textContent == FirstNumber * SecondNumber) {
            Array.from(num.childNodes).map((nodes) => {
              nodes.setAttribute("fill", "green");
              correctNode = num.childNodes;
            });
          }
        });

        setTimeout(function () {
          increaseQuestionCounter();
          addQuestionResult({
            question: `${FirstNumber} x ${SecondNumber}`,
            result: "X",
          });

          Array.from(correctNode).map((nodes) => {
            nodes.setAttribute("fill", "white");
          });

          initNumbers();
        }, 3000);
      }
    }
  };

  const initNumbers = () => {
    document.body.style.background = "#2d2d2d";
    setDisable(false);
    let numArr = [getRandomInt(0, 10), getRandomInt(0, 10)];
    setFirstNumber(numArr[0]);
    setSecondNumber(numArr[1]);

    let answers = randomAnswers(numArr);
    setAnswers(shuffle(answers));
  };

  //Recursive unique answers
  const randomAnswers = (numArr) => {
    let answers = [];
    answers.push(numArr[0] * numArr[1]);
    for (let i = 0; i < 2; i++) {
      answers.push(randomOperation(numArr));
    }
    return isUnique(answers) === 3 ? answers : randomAnswers(numArr);
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
