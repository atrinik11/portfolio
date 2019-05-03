import React from "react";
import { Modal, Button } from "react-bootstrap";
// import workImage from "../workImage.json";
import "../App.css";

class Bamazon extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     workImages: workImage,
  //     image: {}
  //   };
  //   // console.log("images: ", this.state.workImages);
  // }
  displayImage = () => {
    if (this.state.workImages.name === "Bamazon") {
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
          <Modal.Title id="contained-modal-title-lg">Bamazon</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDesc">
          {/* <img alt={props.name} src={props.image} /> */}
          <h4>Description:</h4>
          <p>
            Creating an Amazon-like storefront with the MySQL database. The app
            will take in orders from customers and deplete stock from the
            store's inventory.
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>JavaScript</li>
            <li>Node JS</li>
            <li>MySQL Database</li>
          </ul>
          <h4>Links to Codes:</h4>
          <Button className="modalButton">
            <a
              href="https://github.com/atrinik11/Bamazon"
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
export default Bamazon;
