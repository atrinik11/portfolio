import React from "react";
import { Modal, Button } from "react-bootstrap";
import workImage from "../workImage.json";
import "../App.css";

class Virtual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workImages: workImage,
      image: {}
    };
    console.log("images: ", this.state.workImages);
  }
  displayImage = () => {
    if (this.state.workImages.name === "Virtual-Trainer") {
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
          <Modal.Title id="contained-modal-title-lg">
            Virtual Trainer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDesc">
          {/* <img alt={props.name} src={props.image} /> */}
          <h4>Description:</h4>
          <p>
            A MERN stack application that lets users search for articles from
            new york times. The user can create its own account by registering.
            Can keep track of all the nutrition breakdown of the day. Look for
            health related articles.
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>Bootstrap, CSS</li>
            <li>React.JS</li>
            <li>Passport.Js</li>
            <li>MongoDB</li>
          </ul>
          <h4>Links to Codes and App:</h4>
          <Button className="modalButton">
            <a
              href=" https://evening-bastion-35416.herokuapp.com/"
              target="_blank "
              rel="noopener noreferrer"
            >
              Application Link
            </a>
          </Button>
          <Button className="modalButton">
            <a
              href="https://github.com/atrinik11/Virtual-Trainer"
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
export default Virtual;
