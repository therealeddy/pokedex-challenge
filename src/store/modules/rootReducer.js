import { combineReducers } from 'redux';

import pokemons from './pokemons/reducer';
import status from './status/reducer';

export default combineReducers({
  pokemons,
  status,
});
