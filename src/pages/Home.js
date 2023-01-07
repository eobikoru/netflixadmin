import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Topbar from "../component/topbar/Topbar";
import "./home.css";
import Movie from "./movie/Movie";

function Home() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <div className="homeWidgets">
            <Movie />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
