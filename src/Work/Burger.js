import React from "react";
import { Modal, Button } from "react-bootstrap";
import workImage from "../workImage.json";
import "../App.css";

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workImages: workImage,
      image: {}
    };
    // console.log("images: ", this.state.workImages);
  }
  displayImage = () => {
    if (this.state.workImages.name === "Burger") {
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
          <Modal.Title id="contained-modal-title-lg">Burger</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDesc">
          {/* <img alt={props.name} src={props.image} /> */}
          <h4>Description:</h4>
          <p>
            A Node, Express, Handlebars, and MySQL burger app that lets users
            input the names of burgers they'd like to eat... and then devour
            them!
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>Bootstrap, CSS</li>
            <li>JavaScript, jQuery</li>
            <li>Node JS</li>
            <li>ORM</li>
            <li>Handlebars</li>
            <li>MySQL Database</li>
            <li>Heroku, JAWSDB</li>
            <li>MVC</li>
          </ul>
          <h4>Links to Codes and App:</h4>
          <Button className="modalButton">
            <a
              href="https://salty-lowlands-10174.herokuapp.com/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              Application Link
            </a>
          </Button>
          <Button className="modalButton">
            <a
              href="https://github.com/atrinik11/Burgers"
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
export default Burger;
