import React from "react";
import { Modal, Button } from "react-bootstrap";
// import workImage from "../workImage.json";
import "../App.css";

class Catering extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     workImages: workImage,
  //     image: {}
  //   };
  //   // console.log("images: ", this.state.workImages);
  // }
  displayImage = () => {
    if (this.state.workImages.name === "Catering") {
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
            Catering Application
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDesc">
          {/* <img alt={props.name} src={props.image} /> */}
          <h4>Description:</h4>
          <p>
            Catering App was developed to enhance communication and organization
            within a small team. Using a centralized work space, all team
            members are able to view the most up-to-date information. Having
            accurate information available amongst team members promotes
            cohesiveness and mitigates miscommunication within a group. Team
            members are able to create, update, and/or delete any event with the
            collective approval from the team. When a new event is created or
            updates are made to an existing event, a notification is sent via
            email to all team members for viewing and approval. With intuitive
            functionality, this application makes shared work flow within a
            small team easy and efficient.
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>BootStrap, CSS</li>
            <li>JavaScript, jQuery</li>
            <li>Node JS</li>
            <li>MySQL Database</li>
            <li>Heroku, JAWSDB, MVC</li>
            <li>dotenv-json, Express, Handlebars</li>
            <li>Sequelize</li>
            <li>npm Nodemailer Package</li>
          </ul>
          <h4>Links to Codes and App:</h4>
          <Button className="modalButton">
            <a
              href="https://cater-app.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Application Link
            </a>
          </Button>
          <Button className="modalButton">
            <a
              href="https://github.com/atrinik11/project2"
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
export default Catering;
