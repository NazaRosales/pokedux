import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
const PokeCard = ({ name }) => {
  return (
    <Card
      title= {name}
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Imagen de un ditto."
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description="Fire, magic" />
    </Card>
  );
};

export { PokeCard };
