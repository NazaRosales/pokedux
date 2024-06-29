import "./App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Searcher } from "./components/Searcher/Searcher";
import { PokeList } from "./components/PokeList/PokeList";
import { getPokemons } from "./api";
import { setPokemons as setPokemonsActions } from "./actions";
function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await getPokemons();
      setPokemons(res);
    };
    fetchPokemons();
  }, [setPokemons]);
  console.log(pokemons);

  return (
    <div className="App">
      <Searcher />
      <PokeList pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
