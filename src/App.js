import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

let style = {
  position: "absolute",
  top: 0,
  width: '100%'
};

const App = () => (
  <div style={{ display: "" }}>
    <Header />
    <section style={style}>
      <Switch>
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/menu" render={() => <Menu />} />
        <Route exact path="/" render={() => <Home />} />
      </Switch>
      <Footer />
    </section>
  </div>
);

export default App;
