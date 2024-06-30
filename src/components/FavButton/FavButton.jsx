import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
const FavButton = ({ isFavorite, onClick }) => {
  const icon = isFavorite ? <StarFilled /> : <StarOutlined />;
  return <Button icon={icon} onClick={onClick} />;
};
export { FavButton };
