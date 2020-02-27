import React from "react";
import "./styles.css";
import logo from "./images/logo.png";
import CharacterCard from "../components/characterCard";
// https://rickandmortyapi.com/api/character/

const App = () => {
  return (
    <div className="container">
      <div className="App">
        <img className="Logo" src={logo} alt="Rick y Morty" />

        <ul className="row">
          {this.state.data.results.map(character => (
            <li className="col-6 col-md-3" key={character.id}>
              <CharacterCard character={character} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
