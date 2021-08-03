import {LOGIN, OTPVERIFY} from '../../config/urls';
// import {apiPost, setUserData} from '../../utils/utils';
import store from '../store';
import types from '../types';

const {dispatch} = store;
export function login(data = {}) {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
}

export function onLogout() {
  dispatch({
    type: types.ONLOGOUT,
    payload: {},
  });
}
