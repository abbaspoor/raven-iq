import { useState, useEffect } from "react";
import Question from "./components/Question";
import Answers from "./components/Answers";

const images_number = [...Array(60).keys()];

function App() {
  const [qnumber, setNumber] = useState(0);
  const [isInit, setIsInit] = useState(true);

  useEffect(() => {
    localStorage.setItem("answers", "");
  }, []);

  const handler = (event, value) => {
    setNumber(qnumber + 1);
    setIsInit(false);
    let answers = localStorage.getItem("answers").concat(value);
    localStorage.setItem("answers", answers);
  };

  const back_btn = () => {
    setNumber(qnumber - 1);
    let answers = localStorage.getItem("answers").slice(0, -1);
    localStorage.setItem("answers", answers);
  };

  return (
    <main>
      <Question question={"../iq/" + qnumber} />
      <div id="answers">
        <Answers key={qnumber} question_number={qnumber} handler={handler} />
      </div>
      {isInit ? null : (
        <button onClick={back_btn} style={{ color: "white" }}>
          back
        </button>
      )}
    </main>
  );
}

export default App;
