import { FavButton } from "../FavButton/FavButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../store/actions/index";
import "./PokeCard.css";
const PokeCard = ({ name, image, id, favorite, types }) => {
  const dispatch = useDispatch();
  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  const pokemonTypes = types.map(
    (item) => item.type.name[0].toUpperCase() + item.type.name.slice(1)
  ).join(", ");
  return (
    <div className="pokeCard">
      <FavButton onClick={handleFavorite} isFavorite={favorite} />
      <h2>{name}</h2>
      <img loading="lazy" src={image} alt={`Imagen del pokemon: ${name}.`} />
      <p>Types: {pokemonTypes}.</p>
    </div>
  );
};

export { PokeCard };
