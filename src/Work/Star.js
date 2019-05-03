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
    if (this.state.workImages.name === "Star-war") {
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
          <Modal.Title id="contained-modal-title-lg">Star War</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDesc">
          <h4>Description: </h4>
          <p>
            This Game is developed using JQuery. The player select one character
            and another as defender. The game is played by attacking the
            opponent using the attack button. Once the player defeat the
            defender, it can choose another defender. But once the player is
            defeated, the game is over.
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>HTML</li>
            <li>BootStrap</li>
            <li>CSS</li>
            <li>JQuery</li>
          </ul>
          <h4>Links to Codes and App: </h4>
          <Button className="modalButton">
            <a
              href="https://atrinik11.github.io/starwar/"
              target="_blank "
              rel="noopener noreferrer"
            >
              Application Link
            </a>
          </Button>
          <Button className="modalButton">
            <a
              href="https://github.com/atrinik11/starwar"
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
