import { FaSearch } from "react-icons/fa";
import "./Searcher.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setSearchedsPokemons } from "../../store/actions";
const Searcher = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setInput(e.target.value);
    console.log(input);
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
      <FaSearch className="btnSearch" />
    </fieldset>
  );
};
export { Searcher };
