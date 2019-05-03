import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    // window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }
  onScroll = isTop => {
    this.setState({ isTop });
  };
  render() {
    return (
      <header>
        <nav>
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x" />
          </div>
          <div className="row logo">
            <Link to="/about">Reena Mahapatra</Link>
          </div>
          <div className="menu-1">
            <ul>
              <li>
                <Link to="/" id="li-home">
                  Home
                </Link>
              </li>
              {this.props.children}
              <li>
                <Link to="work" id="li-work">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/skill" id="li-skill">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/about" id="li-about">
                  About Me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
