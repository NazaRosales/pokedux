import { getPokemonsDetails } from "../api";
import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetails = await Promise.all(
      pokemons.map((pokemon) => getPokemonsDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetails));
  };

export const setLoading = (payload) => ({ type: SET_LOADING, payload });
export const setFavorite = (payload) => ({ type: SET_FAVORITE, payload });
