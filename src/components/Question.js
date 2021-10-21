import React from "react";

export default function Question({question }) {
  return (
    <div id="question">
      <img alt="" src={'../iq/' + question + '/' + 0 +'.svg'} />
    </div>
  );
}
