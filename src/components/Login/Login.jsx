import React from 'react';
import { Redirect } from "react-router-dom";

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
        if (this.props.user.isAuth) {
            return <Redirect to={"/profile"} />;
        }

        return (
            <div>
                <form className="item-add-form d-flex"
                    onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        placeholder="Имя" />
                    <input
                        type="text"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        placeholder="Пароль" />
                    <button type="submit"
                        className="btn btn-primary btn-sm">
                        Add Item
                </button>
                </form>
            </div>
        )
    }
}
export default Login