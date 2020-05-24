import produce from 'immer';

const INITIAL_STATE = {
  count: 0,
  pokemons: [],
  loading: false,
};

export default function pokemons(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@home/GET_POKEMONS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@home/GET_POKEMONS_SUCCESS': {
        draft.loading = false;
        draft.count = action.payload.count;

        let id = action.payload.paged;

        draft.pokemons = action.payload.results.map((item) => {
          id++;
          return { ...item, id };
        });

        break;
      }
      default:
    }
  });
}
