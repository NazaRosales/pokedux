import React from "react";
import ReactDOM from "react-dom/client";
import { thunk } from "redux-thunk";
import App from "./App";
import { pokemonReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { convertPascalCase, logger } from "./middlewares";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhansers = composeAlt(
  applyMiddleware(thunk, logger, convertPascalCase)
);
const store = createStore(pokemonReducer, composedEnhansers);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
