import React from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./scss/index.scss";
import Catalogo from "./components/Catalogo";
import CatalogoContent from "./components/CatalogoContent";

export default function App() {
  return <div className="app-container">
    <Menu />
    <Home />
    <About />
    <Contact />
    <Catalogo />
    <CatalogoContent />
  </div>;
}
