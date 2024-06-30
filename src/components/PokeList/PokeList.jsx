import { PokeCard } from "../PokeCard/PokeCard";
import "./PokeList.css";
const PokeList = ({ pokemons }) => {
  return (
    <div className="pokelist">
      {pokemons.map((pokemon, index) => (
        <PokeCard
          name={pokemon?.name}
          image={pokemon?.sprites?.other?.showdown?.front_default}
          key={pokemon?.name + index}
          abilities={pokemon?.abilities}
        />
      ))}
    </div>
  );
};
export { PokeList };
