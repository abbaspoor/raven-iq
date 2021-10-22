import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import Answers from "../components/Answers";
import { Redirect } from "react-router-dom";

export default function Items() {
  const [question_number, setNumber] = useState(0);
  const [isInit, setIsInit] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    localStorage.setItem("answers", "");
  }, []);

  if (isFinished) {
    return <Redirect to="/result" />;
  }

  const handler = (event, value) => {
    setNumber(question_number + 1);
    if (question_number > 0) {
      setIsInit(false);
    }
    if (question_number === 59) {
      setIsFinished(true);
    }
    let answers = localStorage.getItem("answers").concat(value);
    localStorage.setItem("answers", answers);
  };

  const previous = () => {
    setNumber(question_number - 1);
    let answers = localStorage.getItem("answers").slice(0, -1);
    localStorage.setItem("answers", answers);
  };

  return (
    <div>
      <main>
        <Question question={"../iq/" + question_number} />
        <div id="answers">
          <Answers
            key={question_number}
            questionNumber={question_number}
            handler={handler}
          />
        </div>
        {isInit ? null : (
          <button onClick={previous} style={{ color: "white" }}>
            back
          </button>
        )}
      </main>
    </div>
  );
}
