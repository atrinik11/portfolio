import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer" role="contentinfo">
          <div className="container">
            <div className="row copyright">
              <div className="col-12 text-center">
                <p>
                  <small className="block">&copy; Rights Reserved.</small>
                  <br />
                  <small className="block">
                    Designed by <a href="/about">Reena Mahapatra</a>
                  </small>
                </p>
              </div>
            </div>
            <div className="row icons">
              <div className="col-12 text-center">
                <a
                  href="https://github.com/atrinik11"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="devicon-github-plain-wordmark colored" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rmahapatra"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a href="mailto:reenm2017@gmail.com">
                  <i className="fas fa-at" />
                </a>
                <a
                  href="https://www.facebook.com/reena.mahapatra"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="devicon-facebook-plain colored" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
