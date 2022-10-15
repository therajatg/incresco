import React from "react";
import "./App.css";
import { Navbar, Products } from "./components/index";

export const App = () => {
  return (
    <React.Fragment className="app">
      <Navbar />
      <Products />
    </React.Fragment>
  );
};
