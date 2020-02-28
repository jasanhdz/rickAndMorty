const fetchCharacters = () => {
  const data = fetch("/api/character/").then(response => {
    return response.json();
  });
  console.log(data.then(data => console.log(data)));
};
fetchCharacters();
