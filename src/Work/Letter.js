import React from "react";
import { Modal, Button } from "react-bootstrap";
// import workImage from "../workImage.json";
import "../App.css";

class Letter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     workImages: workImage,
  //     image: {}
  //   };
  //   // console.log("images: ", this.state.workImages);
  // }
  displayImage = () => {
    if (this.state.workImages.name === "Find-Letter") {
    }
  };
  render(props) {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
        className="modalWindow"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-lg">Psychic Game</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDesc">
          {/* <img alt={props.name} src={props.image} /> */}
          <h4>Description:</h4>
          <p>
            This Psychic Game i've developed is a simple JavaScript game that
            allows you to guess the letter the computer chooses. You have to
            choose a letter from A - Z and test your psycic ability to see if
            you can read a computers mind!.
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>HTML</li>
            <li>BootStrap, CSS</li>
            <li>JavaScript</li>
          </ul>
          <h4>Links to Codes and App:</h4>
          <Button className="modalButton">
            <a
              href="https://atrinik11.github.io/Psychi-Game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Application Link
            </a>
          </Button>
          <Button className="modalButton">
            <a
              href="https://github.com/atrinik11/Psychi-Game"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code Link
            </a>
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modalFooter" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default Letter;
