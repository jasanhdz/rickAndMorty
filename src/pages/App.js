import React, { useState, useEffect } from "react";
import "../styles.css";
import logo from "../images/logo.png";
import CharacterCard from "../components/characterCard";

const fetchCharacters = async (setState, state) => {
  setState({ ...state, loading: true });
  const url = "https://rickandmortyapi.com";
  try {
    const response = await fetch(`${url}/api/character`, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    // console.log(data);

    setState({
      ...state,
      loading: false,
      data: {
        info: data.info,
        results: [].concat(state.data.results, data.results)
      },
      nextPages: state.nextPages + 1
    });
    console.log(state.data);
  } catch (error) {
    setState({ ...state, loading: false, error: error });
  }
};

const App = () => {
  const [state, setState] = useState({
    data: {
      results: []
    },
    loading: false,
    error: null,
    nextPages: 3
  });
  useEffect(() => {
    console.log("ComponentDidMount");
    fetchCharacters(setState, state);
    return () => {
      console.log("CompontedWillMount");
      new AbortController.abort();
    };
  }, []);
  if (state.error) {
    return (
      <div>
        <h1>{state.error.message}</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="App">
        <img className="Logo" src={logo} alt="Rick y Morty" />

        <ul className="row">
          {state.data.results.map(character => (
            <li className="col-6 col-md-3" key={character.id}>
              <CharacterCard character={character} />
            </li>
          ))}
        </ul>

        {state.loading && <p>Cargando....</p>}

        {!state.loading && (
          <button onClick={() => fetchCharacters(setState, state)}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
