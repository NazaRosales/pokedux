import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
const PokeCard = () => {
  return (
    <Card
      title="Ditto"
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
