import { Link } from "react-router-dom";
import Utils from "../Utils";
import Layout from "../layout/Layout";

export default function Results() {
  let result = localStorage.getItem("answers");
  result = Array.from(String(result), Number);
  let helper = new Utils();
  result = helper.score(result);

  return (
    <Layout>
      <h1>
        Your IQ Is: <span style={{ color: "Yellow" }}>{result.iq}</span>
      </h1>
      <h1>
        You Are Smarter Than{" "}
        <span style={{ color: "Yellow" }}>{result.percent}%</span> Of Pepole
      </h1>
      <Link className="btn btn-danger" to="/run">
        Run Again!
      </Link>
    </Layout>
  );
}
