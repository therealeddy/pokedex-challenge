import { all } from 'redux-saga/effects';

import pokemons from './pokemons/sagas';
import status from './status/sagas';

export default function* rootSaga() {
  return yield all([pokemons, status]);
}
