import React from "react";
import { Modal, Button } from "react-bootstrap";
// import workImage from "../workImage.json";
import "../App.css";

class Nyt extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     workImages: workImage,
  //     image: {}
  //   };
  //   // console.log("images: ", this.state.workImages);
  // }
  displayImage = () => {
    if (this.state.workImages.name === "NYT") {
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
            New York Times React
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDesc">
          {/* <img alt={props.name} src={props.image} /> */}
          <h4>Description:</h4>
          <p>
            A React.js app that lets users search for articles from new york
            times. The user can give an year range of choice, view the article
            and save for future references.
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>Bootstrap, CSS</li>
            <li>React.JS</li>
            <li>MongoDB</li>
          </ul>
          <h4>Links to Codes and App:</h4>
          <Button className="modalButton">
            <a
              href="https://thawing-harbor-66764.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heroku Link
            </a>
          </Button>
          <Button className="modalButton">
            <a
              href="https://github.com/atrinik11/nytreact"
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
export default Nyt;
