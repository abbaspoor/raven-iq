import { Link } from "react-router-dom";
import React from "react";
import Layout from "../layout/Layout";

export default function Start() {
  return (
    <Layout>
      <h1>Press Start Button</h1>
      <Link className="btn btn-danger" to="/run" style={{ color: "white" }}>
        Start
      </Link>
    </Layout>
  );
}
