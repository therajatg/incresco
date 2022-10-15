import React from "react";
import "./App.css";
import { Navbar, Products, Sidebar } from "./components/index";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Sidebar className="sidebar" />
        <Products />
      </div>
    </div>
  );
};
