import React from "react";
import { Modal, Button } from "react-bootstrap";
// import workImage from "../workImage.json";
import "../App.css";

class Train extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     workImages: workImage,
  //     image: {}
  //   };
  //   // console.log("images: ", this.state.workImages);
  // }
  displayImage = () => {
    if (this.state.workImages.name === "Train-Scheduler") {
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
            Train Scheduler
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDesc">
          {/* <img alt={props.name} src={props.image} /> */}
          <h4>Description:</h4>
          <p>
            Created a train schedule application that incorporates Firebase to
            host arrival and departure data. The app will retrieve and
            manipulate this information with Moment.js. This website will
            provide up-to-date information about various trains, namely their
            arrival times and how many minutes remain until they arrive at their
            station.
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>HTML</li>
            <li>BootStrap, CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Firebase API</li>
            <li>Node JS</li>
            <li>Moment JS</li>
          </ul>
          <h4>Links to Codes and App:</h4>
          <Button className="modalButton">
            <a
              href="https://atrinik11.github.io/Train-Scheduler-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Application Link
            </a>
          </Button>
          <Button className="modalButton">
            <a
              href="https://github.com/atrinik11/Train-Scheduler-"
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
export default Train;
