import React, { Component } from "react";
import ReactHintFactory from "react-hint";
import { css } from "react-emotion";
import { ClipLoader } from "react-spinners";
import Images from "./imagesCopy";
import Virtual from "../Work/Virtual";
import Nyt from "../Work/Nyt";
import Memory from "../Work/Memory";
import Burger from "../Work/Burger";
import Catering from "../Work/Catering";
import Liri from "../Work/Liri";
import Crystal from "../Work/Crystal";
import Train from "../Work/Train";
import Friend from "../Work/Friend";
import Bamazon from "../Work/Bamazon";
import Fun from "../Work/Fun";
import Gif from "../Work/Gif";
import Star from "../Work/Star";
import Hang from "../Work/Hang";
import Letter from "../Work/Letter";
import workImage from "../workImage.json";
import "react-hint/css/index.css";
import "../App.css";

const ReactHint = ReactHintFactory(React);
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workImages: workImage,
      loading: true,
      virtualShow: false,
      nytShow: false,
      memoryShow: false,
      burgerShow: false,
      catShow: false,
      liriShow: false,
      crystalShow: false,
      trainShow: false,
      friendShow: false,
      bamazonShow: false,
      funShow: false,
      gifShow: false,
      starwarShow: false,
      hangmanShow: false,
      letterShow: false
    };
    // console.log("images: ", this.state.workImages);
  }
  renderSpinner = () => {
    if (!this.state.loading) {
      return null;
    }
    return <span className="spinner" />;
  };
  handleClick = name => {
    const click = name;
    if (click === "Virtual-Trainer") {
      this.setState({ virtualShow: true });
    } else if (click === "NYT") {
      this.setState({ nytShow: true });
    } else if (click === "Memory Game") {
      this.setState({ memoryShow: true });
    } else if (click === "Burger") {
      this.setState({ burgerShow: true });
    } else if (click === "Catering") {
      this.setState({ catShow: true });
    } else if (click === "Liri Bot") {
      this.setState({ liriShow: true });
    } else if (click === "Crystal") {
      this.setState({ crystalShow: true });
    } else if (click === "Train-Scheduler") {
      this.setState({ trainShow: true });
    } else if (click === "Friend-Finder") {
      this.setState({ friendShow: true });
    } else if (click === "Bamazon") {
      this.setState({ bamazonShow: true });
    } else if (click === "Fun-Finder") {
      this.setState({ funShow: true });
    } else if (click === "Giftastic") {
      this.setState({ gifShow: true });
    } else if (click === "Star-war") {
      this.setState({ starwarShow: true });
    } else if (click === "Hang-man") {
      this.setState({ hangmanShow: true });
    } else if (click === "Find-Letter") {
      this.setState({ letterShow: true });
    }
  };

  render() {
    let virtualClose = () => this.setState({ virtualShow: false });
    let nytClose = () => this.setState({ nytShow: false });
    let memoryClose = () => this.setState({ memoryShow: false });
    let burgerClose = () => this.setState({ burgerShow: false });
    let catClose = () => this.setState({ catShow: false });
    let liriClose = () => this.setState({ liriShow: false });
    let crystalClose = () => this.setState({ crystalShow: false });
    let trainClose = () => this.setState({ trainShow: false });
    let friendClose = () => this.setState({ friendShow: false });
    let bamazonClose = () => this.setState({ bamazonShow: false });
    let funClose = () => this.setState({ funShow: false });
    let gifClose = () => this.setState({ gifShow: false });
    let starClose = () => this.setState({ starwarShow: false });
    let hangClose = () => this.setState({ hangmanShow: false });
    let letterClose = () => this.setState({ letterShow: false });

    if (!this.state.workImages.length === 0) {
      return (
        <div>
          <ClipLoader
            className={override}
            sizeUnit={"px"}
            size={100}
            color={"white"}
            loading={this.state.loading}
          />
        </div>
      );
    }
    return (
      <div className="container-fluid main-scroll">
        <div className="caption">
          <h2> My Work</h2>
        </div>
        {/* {this.renderSpinner()} */}
        <div className="row">
          <ReactHint
            persist={{ hover: true }}
            attribute="data-custom"
            className="custom-hint"
            events={{ hover: true }}
            ref={ref => (this.instance = ref)}
          />
          <ReactHint autoPosition events delay={200} />

          {this.state.workImages.map(images => (
            <div
              className="col-12"
              data-rh="Click on the image to get more project information..."
              data-rh-at="bottom"
            >
              <Images
                key={images.id}
                id={images.id}
                bsStyle="primary"
                handleClick={this.handleClick}
                image={images.image}
                name={images.name}
                tech1={images.tech1}
                tech2={images.tech2}
                tech3={images.tech3}
                tech4={images.tech4}
                tech5={images.tech5}
                // onLoad={this.handleImageChange}
                // onError={this.handleImageChange}
              />
              <Virtual show={this.state.virtualShow} onHide={virtualClose} />
              <Nyt show={this.state.nytShow} onHide={nytClose} />
              <Memory show={this.state.memoryShow} onHide={memoryClose} />
              <Burger show={this.state.burgerShow} onHide={burgerClose} />
              <Catering show={this.state.catShow} onHide={catClose} />
              <Liri show={this.state.liriShow} onHide={liriClose} />
              <Crystal show={this.state.crystalShow} onHide={crystalClose} />
              <Train show={this.state.trainShow} onHide={trainClose} />
              <Friend show={this.state.friendShow} onHide={friendClose} />
              <Bamazon show={this.state.bamazonShow} onHide={bamazonClose} />
              <Fun show={this.state.funShow} onHide={funClose} />
              <Gif show={this.state.gifShow} onHide={gifClose} />
              <Star show={this.state.starwarShow} onHide={starClose} />
              <Hang show={this.state.hangmanShow} onHide={hangClose} />
              <Letter show={this.state.letterShow} onHide={letterClose} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Work;
