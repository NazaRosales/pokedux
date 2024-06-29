import "./App.css";
import { useEffect } from "react";
import { Searcher } from "./components/Searcher/Searcher";
import { PokeList } from "./components/PokeList/PokeList";
import { getPokemons } from "./api";
import { setPokemons } from "./actions";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await getPokemons();
      dispatch(setPokemons(res));
    };
    fetchPokemons();
  }, [dispatch]);
  console.log(pokemons);

  return (
    <div className="App">
      <Searcher />
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default App;
