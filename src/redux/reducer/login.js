import {Types} from '../actionTypes/login';

const initialState = {
  user: {},
  isLoggedIn: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
      };
    case Types.TOGGLE_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    default:
      return state;
  }
}
