import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </div>
  );
}
