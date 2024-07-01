import {
  SET_FAVORITE,
  SET_LOADING,
  SET_POKEMONS,
  SET_SEARCHEDS_POKEMONS,
} from "../actions/types";

const initialState = {
  pokemons: [],
  searchedPokemons: [],
  loading: true,
};
export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_FAVORITE:
      const newPokemons = [...state.pokemons];
      const currentPokemon = newPokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });
      if (currentPokemon < 0) {
        return { ...state };
      } else {
        newPokemons[currentPokemon].favorite =
          !newPokemons[currentPokemon].favorite;
        return { ...state, pokemons: newPokemons };
      }

    case SET_SEARCHEDS_POKEMONS:
      if (action.payload.length) {
        return {
          ...state,
          searchedPokemons: [...state.pokemons].filter((poke) =>
            poke.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
      } else {
        return { ...state, searchedPokemons: [] };
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
