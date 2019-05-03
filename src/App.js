import React, { Component } from "react";
import workImage from "./workImage.json";
import Navbar from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import Skill from "../src/Components/Skill";
import Work from "../src/Components/Work";
// import About from "../src/Components/About";
import Footer from "../src/Components/Footer";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    workImages: workImage
  };
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/skill" component={Skill} />
            {/* <Route exact path="/about" component={About} /> */}
          </Switch>
          <Footer />
          {/* <Work />
          <Skill /> */}
        </div>
      </div>
    );
  }
}

export default App;
