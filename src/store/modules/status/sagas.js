import { toast } from 'react-toastify';

import { takeLatest, all, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { getStatusSuccess } from './actions';

export function* getStatus(data) {
  const { id } = data.payload;

  const response = yield call(api.get, `/pokemon/${id}`);

  if (response.status !== 200) {
    toast.error('Pokémon não encontrado!');
    history.push('/');
    return;
  }

  yield put(getStatusSuccess(response.data));
}

export default all([takeLatest('@pokemon/GET_STATUS_REQUEST', getStatus)]);
