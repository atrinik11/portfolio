import React from "react";
import { Modal, Button } from "react-bootstrap";
// import workImage from "../workImage.json";
import "../App.css";

class Gif extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     workImages: workImage,
  //     image: {}
  //   };
  //   // console.log("images: ", this.state.workImages);
  // }
  displayImage = () => {
    if (this.state.workImages.name === "Giftastic") {
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
          <Modal.Title id="contained-modal-title-lg">Giftastic</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDesc">
          {/* <img alt={props.name} src={props.image} /> */}
          <h4>Description:</h4>
          <p>
            Using the GIPHY API to make a dynamic web page that populates with
            gifs of my choice. To finish this task, I have to call the GIPHY API
            and use JavaScript and jQuery to change the HTML of my site.
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>HTML</li>
            <li>BootStrap, CSS</li>
            <li>JavaScript, Jquery</li>
            <li>API</li>
            <li>AJAX</li>
          </ul>
          <h4>Links to Codes and App:</h4>
          <Button className="modalButton">
            <a
              href="https://atrinik11.github.io/GifTastic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Application Link
            </a>
          </Button>
          <Button className="modalButton">
            <a
              href="https://github.com/atrinik11/GifTastic"
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
export default Gif;
