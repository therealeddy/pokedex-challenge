import { takeLatest, all, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { getPokemonsSuccess } from './actions';

export function* getPokemons(data) {
  const { page } = data.payload;

  const paged = (page - 1) * 20;

  console.tron.log(paged);

  const response = yield call(api.get, `/pokemon/?offset=${paged}&limit=20`);

  yield put(getPokemonsSuccess({ ...response.data, paged }));
}

export default all([takeLatest('@home/GET_POKEMONS_REQUEST', getPokemons)]);
