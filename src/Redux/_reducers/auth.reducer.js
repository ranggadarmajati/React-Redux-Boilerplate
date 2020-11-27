import { AuthConstant } from '../_constants';
import {getItem} from '../../Helper';

let user = getItem('user');
const initialState = user ? { loggedIn: true, user } : {};
export function authentication(state = initialState, action) {
    switch (action.type) {
      case AuthConstant.LOGIN_REQUEST:
        return {
          loggingIn: true,
          user: action.user
        };
      case AuthConstant.LOGIN_SUCCESS:
        return {
          loggedIn: true,
          user: action.user
        };
      case AuthConstant.LOGIN_FAILURE:
        return {};
      case AuthConstant.LOGOUT:
        return {};
      case AuthConstant.FORGOT_PASSWORD_REQUEST:
        return {
          loading: true,
        };
      case AuthConstant.FORGOT_PASSWORD_SUCCESS:
        return {
          loading: false
        };
      case AuthConstant.FORGOT_PASSWORD_FAILURE:
        return {
          loading: false
        };
      default:
        return state
    }
  }
  