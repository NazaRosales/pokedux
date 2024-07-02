import "./App.css";
import { useEffect } from "react";
import { Searcher } from "./components/Searcher/Searcher";
import { PokeList } from "./components/PokeList/PokeList";
import { getPokemons } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsWithDetails, setLoading } from "./store/actions/index";
import logo from "./static/logo-pokedux.svg";
import { Loading } from "./components/Loading/Loading";
function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const searchedPokemons = useSelector((state) => state.searchedPokemons);
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
    }, 2500);
  }, [dispatch]);
  return (
    <div className="App">
      <img src={logo} alt="Pokedux logo" className="pokeduxLogo" />
      <Searcher />
      {loading ? (
        <Loading />
      ) : (
        <PokeList pokemons={searchedPokemons.length? searchedPokemons : pokemons} />
      )}
    </div>
  );
}

export default App;
