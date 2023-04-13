import {Types} from '../actionTypes/login';
import {client} from '../../helpers/api';
import AsyncStorage from '@react-native-community/async-storage';

//Login User
export const login = user => dispatch =>
  new Promise(function (resolve, reject) {
    client
      .post(`/login`, user)
      .then(res => {
        if (res.meta.status === true) {
          AsyncStorage.setItem('userToken', res.jwtToken);
          AsyncStorage.setItem('userId', res.data.id.toString());
          dispatch(getLoginSuccess(res));
        }
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });

//Set isLoggedIn state value
export const setIsLoggedIn = value => dispatch => {
  dispatch(toggleIsLoggedIn(value));
};

const getLoginSuccess = data => ({
  type: Types.LOGIN_SUCCESS,
  payload: data,
});

//Set isLoggedIn state value
const toggleIsLoggedIn = value => ({
  type: Types.TOGGLE_LOGIN,
  payload: value,
});
