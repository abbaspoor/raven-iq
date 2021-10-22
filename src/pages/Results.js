import { Link } from "react-router-dom";
import Utils from "../Utils";

export default function Results() {
  
let result = localStorage.getItem("answers");
result = Array.from(String(result), Number);
let helper = new Utils();
result = helper.score(result);


  return <div style={{ color: "white" }}>
      <h1>IQ : <span style={{ color: "Yellow" }}>{result.iq}</span></h1>
      <h1>You Are Smarter Than <span style={{ color: "Yellow" }}>{result.percent}</span> Percent Of Pepole</h1>
      <Link to='/run' style={{ color: "white" }}>Run Again!</Link>
  </div>;
}
