import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import { Redirect } from "react-router-dom";
import Choices from "../components/Choices";
import Layout from "../layout/Layout";

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
    setIsInit(false);
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
    if (question_number === 1) {
      setIsInit(true);
    }
  };

  return (
    <Layout>
      <Question question={"../iq/" + question_number} />
      <div id="answers" className="row">
        <Choices
          key={question_number}
          questionNumber={question_number}
          handler={handler}
        />
      </div>
      {isInit ? null : (
        <button
          className="btn mt-3 btn-warning text-black"
          onClick={previous}
          style={{ color: "white" }}
        >
          back
        </button>
      )}
    </Layout>
  );
}
