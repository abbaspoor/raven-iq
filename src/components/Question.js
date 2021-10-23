import React from "react";

export default function Question({question }) {
  return (
    <div id="question">
      <img alt="" className="img-fluid rounded" src={'../iq/' + question + '/' + 0 +'.svg'} />
    </div>
  );
}
