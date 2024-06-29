import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { pokemonReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { addCustomPoke, logger } from "./middlewares";
const root = ReactDOM.createRoot(document.getElementById("root"));
const composedEnhansers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, addCustomPoke)
);
const store = createStore(pokemonReducer, composedEnhansers);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
