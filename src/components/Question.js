import React from "react";
import Answers from "./Answers";


export default function Question({question }) {
  return (
    <div id="question">
      <img alt="" src={'../iq/' + question + '/' + 0 +'.svg'} />
    </div>
  );
}
