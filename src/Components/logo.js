import React from "react";
import "../App.css";

const Logo = props => (
  <div className="card row animated zoomIn">
    <img className="card-img-top" src={props.logo} alt={props.name} />
    <div className="card-body">
      <h3 className="card-text">{props.name}</h3>
      <h5 className="card-text">{props.desc}</h5>
    </div>
  </div>
);
export default Logo;
