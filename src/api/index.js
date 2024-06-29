const getPokemons = async () => {
  try {
    const list = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => data.results);
    return list;
  } catch (error) {
    return { error };
  }
};
export { getPokemons };
