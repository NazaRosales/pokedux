import { FaSearch } from "react-icons/fa";
import "./Searcher.css";
const Searcher = () => {
  return (
    <fieldset className="searchBar">
      <input type="search" placeholder="Kabutops..."/>
      <FaSearch className="btnSearch"/>
    </fieldset>
  );
};
export { Searcher };
