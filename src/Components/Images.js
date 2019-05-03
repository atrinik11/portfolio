import React from "react";
import Carousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "../App.css";

const Images = props => (
  <div>
    <Carousel>
      <Carousel.Item>
        <img
          width={400}
          height={600}
          alt={props.name}
          src={props.image}
          onClick={() => props.handleClick(props.name)}
        />

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
      </Carousel.Item>
    </Carousel>
  </div>
);
export default Images;
