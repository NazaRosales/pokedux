import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { FavButton } from "../FavButton/FavButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../actions";
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
    <Card
      title={name}
      cover={<img src={image} alt={`Imagen del pokemon: ${name}.`} />}
      extra={<FavButton isFavorite={favorite} onClick={handleFavorite} />}
    >
      <Meta description={`Abilities: ${formatedAbilities}.`} />
    </Card>
  );
};

export { PokeCard };
