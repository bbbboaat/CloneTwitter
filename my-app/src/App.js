import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function app() {
  return (
    //B
    <div className="app"> 
      {/*Sidebar*/}
      <Sidebar />

      {/* FEED */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default app;
