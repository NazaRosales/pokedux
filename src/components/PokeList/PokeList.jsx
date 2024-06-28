import { PokeCard } from "../PokeCard/PokeCard";
import "./PokeList.css"
const PokeList = ({ pokemons = Array(10).fill("") }) => {
  return (
    <div className="pokelist">
      {pokemons.map((pokemon, index) => (
        <PokeCard key={index} />
      ))}
    </div>
  );
};
export { PokeList };
