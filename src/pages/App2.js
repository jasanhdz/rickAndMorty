import React from "react";
import "../styles.css";
import logo from "../images/logo.png";
import CharacterCard from "../components/characterCard";
import dataInitial from "../data.json";

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        info: [],
        results: []
      },
      loading: false,
      error: null,
      nextPage: 1
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  async fetchCharacters() {
    try {
      const response = await fetch(
        `https://rick-and-morty-api.now.sh/api/morty/${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        loading: false,
        nextPage: this.state.nextPage + 1
      });
      console.log(this.state.data);
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>{this.state.error.message}</h1>
        </div>
      );
    }
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

          {this.state.loading && <p>Cargando....</p>}

          {!this.state.loading && (
            <button onClick={() => this.fetchCharacters()}>Load More</button>
          )}
        </div>
      </div>
    );
  }
}

export default App2;
