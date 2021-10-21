import { useState, useEffect } from "react";
import Question from "./components/Question";
import Answers from "./components/Answers";
import Utils from "./Utils";


function App() {
  const [qnumber, setNumber] = useState(0);
  const [isInit, setIsInit] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    localStorage.setItem("answers", "");
  }, []);

  useEffect(() => {
    if(isFinished){
      let result  = localStorage.getItem("answers")
      result = Array.from(String(result), Number)
      let helper = new Utils
      console.log(helper.score(result))
    }
   
  }, [isFinished])

  const handler = (event, value) => {
    setNumber(qnumber + 1);
    if (qnumber > 0){
      setIsInit(false);
    }
    if(qnumber===59){
      setIsFinished(true)
    }
    
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
