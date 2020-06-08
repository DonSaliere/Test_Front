import React from 'react';
import { Redirect } from "react-router-dom";
import s from './Login.module.css';

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    };

    checkCredentials = (params) => {
        if (
            params.username.toLowerCase() !== 'admin' ||
            params.password !== '12345'
        ) {
            return false
        }

        return true
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        if (this.checkCredentials({ username, password })) {
            this.props.logIn(username);
        }
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { username, password } = this.state;
        if (this.props.isAuth) {
            return <Redirect to={"/profile"} />;
        }

        return (
            <div className = {`${s.container} ${'text-center'}`}>
                <form
                    onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                            placeholder="Имя" />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            placeholder="Пароль" />
                    </div>
                    <button type="submit"
                        className="btn btn-primary btn-sm">
                        Войти
                </button>
                </form>

            </div>
        )
    }
}
export default Login