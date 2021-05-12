import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/pokeball/pokeball_PNG24.png"
              alt="pokeball"
              style = {{ height: '50px' , width: "50px"}}
            />
          </Link>
          <Link to ="/pokemon">Pokemon</Link>{" "}
          <Link to="/locations">Locations</Link>{" "}
          <Link to="/berries">Berries</Link>{" "}
        </nav>
      </div>
    );
  }
}
