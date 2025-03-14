import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadinPokemons } from "./PokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    // dispatch de otra accion, getState para obetener informacion del state, si el usuario esta autenticado alguna informacion.
    dispatch(startLoadinPokemons());

    // TODO: realizar petición http
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await resp.json();
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
