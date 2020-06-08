const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

const initialState = {
    user: 'Admin',
    isAuth: false
};

export default (state = initialState, action) => {
    switch (action.type) {
      case LOG_IN:
        return {
          ...state,
          user: action.user,
          isAuth: true
        }
      case LOG_OUT:
        return {
          ...state,
          user: null,
          isAuth: false
        }
      default:
        return state
    }
  }

  export const loginInCreator = (Login) => ({ type: LOG_IN, user: Login})
  export const logOutInCreator = () => ({ type: LOG_OUT})