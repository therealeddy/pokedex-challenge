export function getPokemonsRequest(data) {
  return {
    type: '@home/GET_POKEMONS_REQUEST',
    payload: {
      page: data,
    },
  };
}

export function getPokemonsSuccess(data) {
  return {
    type: '@home/GET_POKEMONS_SUCCESS',
    payload: data,
  };
}
