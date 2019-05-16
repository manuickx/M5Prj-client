import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SignUp.scss'

import API from '../../API';

class SignUp extends Component {

    state = {
        email: "",
        password: "",
        name: ''
    }

    signupUser = (state) => {
        API.createUser(this.state)
            .then(authData => {
                localStorage.setItem("token", authData.jwt);
                this.props.history.push("/user/main");
                API.getCurrentUser(authData.jwt)
                    .then(user => this.props.getCurrentUser(user))
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.signupUser(this.state)
    }

    render() {
        return (
            <div className='signup-form'>
                <div className='signup-form-buttons'>
                    <Link to='/user/login'><button className='login-button'>LOG IN</button></Link>
                    <button className='signup-button'>SIGN UP</button>
                </div>
                <form className="signup-text" onSubmit={this.handleSubmit}>
                    {/* <h5 className="signup-title">Sign Up</h5> */}
                    <div className="input-field">
                        <input
                            type="name"
                            id="name"
                            placeholder="Name"
                            required
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            required
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <div className="input-field">
                            <button type="submit" className="submit-button">Create account</button>
                        </div>
                    </div>
                </form>


            </div>
        );
    }
}

export default SignUp;