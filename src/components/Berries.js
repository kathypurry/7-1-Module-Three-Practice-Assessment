import React, { Component } from "react";
import axios from "axios";

export default class Berries extends Component {
  constructor() {
    super();
    this.state = {
      berries: [],
      selectedBerry: "",
      berryInfo: {},
    };
  }

  getBerries = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/berry/");
    this.setState({
      berries: data.results,
    });
  };

  componentDidMount() {
    this.getBerries();
  }

  handleChange = async (e) => {
    this.setState({
      selectedBerry: e.target.value,
    });

    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/berry/${e.target.value}/`
    );
    console.log(data);
    this.setState({
      berryInfo: data,
    });
  };

  render() {
    const { berries, berryInfo, selectedBerry } = this.state;
    const options = berries.map((berry) => (
      <option value={berry.name} key={berry.name}>
        {" "}
        {berry.name}{" "}
      </option>
    ));

    return (
      <div>
        <h1>Select a Type</h1>
        <select onChange={this.handleChange} value={selectedBerry}>
          <option></option>
          {options}
        </select>
        <h2>{selectedBerry}</h2>
        <h2>{berryInfo.firmness ? berryInfo.firmness.name : null}</h2>
      </div>
    );
  }
}
