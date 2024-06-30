import "./App.css";
import { useEffect } from "react";
import { Searcher } from "./components/Searcher/Searcher";
import { PokeList } from "./components/PokeList/PokeList";
import { getPokemons } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { Spin } from "antd";
import logo from "./static/logo-pokedux.svg"
function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      const fetchPokemons = async () => {
        const pokemonList = await getPokemons();
        dispatch(getPokemonsWithDetails(pokemonList));
      };
      fetchPokemons();
      dispatch(setLoading(false));
    }, 1500);
  }, [dispatch]);
  return (
    <div className="App">
      <img src={logo} alt="Pokedux logo" className="pokeduxLogo"/>
      <Searcher />
      {loading ? (
        <Spin spinning size="large" />
      ) : (
        <PokeList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
