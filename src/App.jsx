import "./App.css";
import { useEffect } from "react";
import { Searcher } from "./components/Searcher/Searcher";
import { PokeList } from "./components/PokeList/PokeList";
import { getPokemons } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsWithDetails } from "./actions";
function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonList = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonList))
    };
    fetchPokemons();
  }, [dispatch]);
  return (
    <div className="App">
      <Searcher />
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default App;
