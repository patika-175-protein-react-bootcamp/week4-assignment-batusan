import React, { useContext, useState } from "react";

const PlayContext = React.createContext();

const PlayProvider = ({ children }) => {
  const [Score, setScore] = useState(0);
  const [Tour, setTour] = useState(1);
  const [Questions, setQuestions] = useState(1);
  const [CorrectCount, setCorrectCounter] = useState(0);

  const addCorrect = () => {
    setCorrectCounter(CorrectCount + 1);
  };

  const addScore = () => {
    setScore(Score + 1);
  };

  const increaseQuestionCounter = () => {
    setQuestions(Questions + 1);
  };

  const addTour = () => {
    setTour(Tour + 1);
  };

  return (
    <PlayContext.Provider
      value={{
        Score,
        Tour,
        Questions,
        CorrectCount,
        addScore,
        increaseQuestionCounter,
        addTour,
        addCorrect,
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};

function usePlayContext() {
  return useContext(PlayContext);
}

export { PlayProvider, PlayContext, usePlayContext };
