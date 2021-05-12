import React, { Component } from "react";
import axios from 'axios'

export default class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemonInput: "",
      pokemonOutput: {},
    };
  }

  handleChange = (e) => {
    this.setState({
      pokemonInput: e.target.value,
    });
  };

  handleSubmit = async (e) => {
      e.preventDefault()
      const { pokemonInput } = this.state

      try{
          const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`)
          
          this.setState ({
              pokemonOutput: data,
              pokemonInput: "",
              isError: false,
          })
      } catch(e) {
          this.setState({
              pokemonOutput : {},
              pokemonInput: "",
              isError : true,
          })
      }
      
  }

  render() {
      const { pokemonInput, pokemonOutput, isError } = this.state
    return (
      <div>
        <h1>Search for a Pokemon</h1>
        <form onSubmit={this.handleSubmit}>
          <input
          value={pokemonInput}
            onChange={this.handleChange}
            type="text"
            placeholder="Find Your Pokemon"
          ></input>
          <button>Submit</button>
        </form>

        {pokemonOutput.name? (
            <div>
                <p>Name: {pokemonOutput.name}</p>
                <img src={pokemonOutput.sprites.front_default} alt =""/>
                <p>ID {pokemonOutput.id}</p>
            </div>
        ): null}
        {isError ? <h2>Pokemon not found!</h2> : null}
      </div>
    );
  }
}
