import produce from 'immer';

const INITIAL_STATE = {
  pokemon: {},
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@pokemon/GET_STATUS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@pokemon/GET_STATUS_SUCCESS': {
        draft.loading = false;
        draft.pokemon = action.payload;
        break;
      }
      default:
    }
  });
}
