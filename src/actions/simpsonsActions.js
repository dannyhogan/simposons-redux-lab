import { getCharacters } from '../services/simpsonsApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';

export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS,
  payload: getCharacters(),
});
