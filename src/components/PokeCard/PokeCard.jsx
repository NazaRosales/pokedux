import { FavButton } from "../FavButton/FavButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../actions";
import "./PokeCard.css";
const PokeCard = ({ name, image, abilities, id, favorite }) => {
  const dispatch = useDispatch();
  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  const formatedAbilities = abilities
    .map(
      (item) =>
        item?.ability?.name[0]?.toUpperCase() + item?.ability?.name?.slice(1)
    )
    .join(", ");
  return (
    <div className="pokeCard">
      <FavButton onClick={handleFavorite} isFavorite={favorite} />
      <h2>{name}</h2>
      <img src={image} alt={`Imagen del pokemon: ${name}.`} />
      <p>Abilities: {formatedAbilities}</p>
    </div>
  );
};

export { PokeCard };
