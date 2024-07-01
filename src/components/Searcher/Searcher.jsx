import "./Searcher.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getFavorites, setSearchedsPokemons } from "../../store/actions";
import { FaStar } from "react-icons/fa";

const Searcher = () => {
  const searchedPokemons = useSelector((state) => state.searchedPokemons);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setInput(e.target.value);
  };
  const handleSearchFavorites = () => {
    const applyFilter = !searchedPokemons.length
    dispatch(getFavorites(applyFilter));
    setInput("");
  };
  useEffect(() => {
    dispatch(setSearchedsPokemons(input));
  }, [input, dispatch]);

  return (
    <fieldset className="searchBar">
      <input
        type="search"
        placeholder="Kabutops..."
        value={input}
        onChange={handleSearch}
      />
      <FaStar className="btnStar" onClick={handleSearchFavorites} />
    </fieldset>
  );
};
export { Searcher };
