import { FETCH_CHARACTERS } from '../actions/simpsonsActions';

const initialState = {
  characters: [],
  error: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return { ...state, characters: [...state.characters, action.payload] };
    default:
      return state;
  }
}
