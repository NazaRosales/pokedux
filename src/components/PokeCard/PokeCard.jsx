import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
const PokeCard = ({ name, image, abilities }) => {
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
      extra={<StarOutlined />}
    >
      <Meta description={`Abilities: ${formatedAbilities}.`} />
    </Card>
  );
};

export { PokeCard };
