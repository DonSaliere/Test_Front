const AUTH_LOG_IN = 'AUTH_LOG_IN'
const AUTH_LOG_OUT = 'AUTH_LOG_OUT'

const initialState = {
    user: '',
    isAuth: false
};

export default (state = initialState, action) => {
    switch (action.type) {
      case AUTH_LOG_IN:
        return {
          ...state,
          user: action.user,
          isAuth: true
        }
      case AUTH_LOG_OUT:
        return {
          ...state,
          user: null,
          isAuth: false
        }
      default:
        return state
    }
  }

  export const loginInCreator = (Login) => ({ type: AUTH_LOG_IN, user: Login})
  export const logOutInCreator = () => ({ type: AUTH_LOG_OUT})