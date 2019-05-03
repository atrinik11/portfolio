import React from "react";
import { Modal, Button } from "react-bootstrap";
// import workImage from "../workImage.json";
import "../App.css";

class Star extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     workImages: workImage,
  //     image: {}
  //   };
  //   console.log("Images: ", this.state.workImages);
  // }
  displayImage = () => {
    if (this.state.workImages.name === "Hang-man") {
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
          <Modal.Title id="contained-modal-title-lg">Hangman</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDesc">
          <h4>Description: </h4>
          <p>
            This Hangman Game is a simple JavaScript game that allows the player
            to guess the word the computer chooses. The player gets 9 chances to
            guess the word. When guessed correctly, the player wins and an image
            is displayed representing the word. And when all the guess chances
            are over without the correct word been guessed, the player losses
            the game.
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>HTML</li>
            <li>BootStrap</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <h4>Links to Codes and App: </h4>
          <Button className="modalButton">
            <a
              href="https://atrinik11.github.io/hangman/"
              target="_blank "
              rel="noopener noreferrer"
            >
              Application Link
            </a>
          </Button>
          <Button className="modalButton">
            <a
              href="https://github.com/atrinik11/hangman"
              target="_blank "
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

export default Star;
