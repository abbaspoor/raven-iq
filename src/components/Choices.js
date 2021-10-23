import React from "react";
import Choice from "./Choice";

export default function Choices({ questionNumber, handler }) {
let choices = 0
  if (questionNumber > 23) {
    choices = Array.from({ length: 8 }, (x, i) => i+1);
  } else {
    choices = Array.from({ length: 6 }, (x, i) => i+1);
  }
  return choices.map(item => 
    <Choice
       key={item} 
      handler={handler}
      choice={item}
      questionNumber={questionNumber}
    />
  )
}
