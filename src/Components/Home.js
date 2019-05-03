import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="jumbotron text-center">
      <div className="background-image" />
      <div className="main-heading">
        <h1>Full Stack Developer</h1>
      </div>
      <div id="linksTo" className="col-xs-12 col-sm-12 col-md-6">
        <a
          href="https://www.linkedin.com/in/rmahapatra "
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-lg center animated bounceInDown">
            Linkedin
          </button>
        </a>
        <br />
        <a
          href="https://github.com/atrinik11 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-lg center1 animated bounceInRight">
            GitHub
          </button>
        </a>
        <br />
        <a
          href="https://github.com/atrinik11 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-lg center2 animated bounceInUp">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
