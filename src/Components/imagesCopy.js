import React from "react";
import "../App.css";

const Images = props => (
  <div className="panel panel-default animated zoomIn">
    <div className="panel-body row shadow-lg mb-5  rounded">
      <div className="col-xs-12 col-md-6 col-lg-3">
        <img
          alt={props.name}
          src={props.image}
          onClick={() => props.handleClick(props.name)}
        />
      </div>
      <div className="col-xs-12 col-md-6 col-lg-4 align-middle">
        <h3>{props.name}</h3>
      </div>
      <div className="col-xs-12 col-md-12 col-lg-5">
        <h5>Technology Used: </h5>
        <ul>
          <li>{props.tech1}</li>
          <li>{props.tech2}</li>
          <li>{props.tech3}</li>
          <li>{props.tech4}</li>
          <li>{props.tech5}</li>
        </ul>
      </div>
    </div>
  </div>
);
export default Images;
