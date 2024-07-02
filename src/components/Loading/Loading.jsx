import gif from "../../static/pikachu-running.gif";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading">
        <img src={gif} alt="pikachu running gif loading" />
        <h2 className="loading-text">Loading...</h2>
      </div>
    </div>
  );
};

export { Loading };
