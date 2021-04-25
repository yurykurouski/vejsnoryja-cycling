import * as types from './types';

const initialState = {
  currentUser: '',
};

export default function lists(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_USER: {
      return { ...state, currentUser: action.payload};
    }

    default: {
      return state;
    }
  }
}