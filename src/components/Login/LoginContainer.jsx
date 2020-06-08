import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { loginInCreator, logOutInCreator } from '../Redux/auth-reducer';

const mapStateToProps = state => ({
    user: state.auth.user,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = dispatch => {
    return {
        logIn: (text) => {
            let action = loginInCreator(text);
            dispatch(action);
        }
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;