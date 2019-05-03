import React, { Component } from "react";
import Logo from "./logo";
import skillLogo from "../skillLogo.json";
import "../App.css";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillLogos: skillLogo
    };
  }
  render() {
    return (
      <div className="container-fluid main2-scroll">
        <div className="container">
          <div className="caption">
            <h2> Technical Skills</h2>
          </div>
          <div className="row">
            {this.state.skillLogos.map(logos => (
              <div className="col-xs-12 col-md-6 col-lg-4">
                <Logo
                  key={logos.id}
                  logo={logos.logo}
                  name={logos.name}
                  desc={logos.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
