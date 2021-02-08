import { connect } from 'react-redux';
import Login from './Login';
import { loginInCreator} from '../../Redux/auth-reducer';

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

// const mapDispatchToProps = dispatch => {
//     return {
//         logIn: (text) => {
//             dispatch(loginInCreator(text));
//         }
//     }
// }

const mapDispatchToProps =  {
    loginInCreator

}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;