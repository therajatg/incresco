import React from "react";
import "./App.css";
import { Navbar, Products, Sidebar, Sort } from "./components/index";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Sort className="sort" />
      <div className="content">
        <Sidebar className="sidebar" />
        <Products />
      </div>
    </div>
  );
};
