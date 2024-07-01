import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "./FavButton.css"
const FavButton = ({ isFavorite, onClick }) => {
  const icon = isFavorite ? <FaStar /> : <FaRegStar />;
  return <span className = "favBtn" onClick={onClick}>{icon}</span>;
};
export { FavButton };
