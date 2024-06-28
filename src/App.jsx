import "./App.css";
import { PokeList } from "./components/PokeList/PokeList";
import { Searcher } from "./components/Searcher/Searcher";
function App() {
  return (
    <div className="App">
      <Searcher />
      <PokeList />
    </div>
  );
}

export default App;
