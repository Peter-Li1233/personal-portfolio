import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';

import { FormValidator } from "../../tools/FormValidator";
import { ValidationMessage } from "../../tools/ValidationMessage";

import {
    GoogleLoginButton, 
    FacebookLoginButton, 
    TwitterLoginButton 
} from 'react-social-login-buttons';

import './signup.css';

import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
    <div>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    // isAdmin: false,
    error: null
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...INITIAL_STATE
        };

        this.rules = {
            username: { required: true },
            email: { required: true, email: true },
            passwordOne: { required: true, equals: "passwordTwo" },
            passwordTwo: { required: true, equals: "passwordOne" }
        }
    }

    onSubmit = e => {
        const {username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({
                    ...INITIAL_STATE
                });
                this.props.history.push(ROUTES.LANDING);
            })
            .catch(error => {
                this.setState({ error })
            });

    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state;

        return (
            <div className="container">
                <div className="signup-form">
                    <h1 className="text-center">
                        <span className="font-weight-bold">pldesign</span>.com
                    </h1>
                    <h2 className="text-center">Welcome</h2>
                    <FormValidator data={ this.state } rules={ this.rules }
                        submit={ this.onSubmit } buttonText="Create Account">
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                className="form-control"
                                name="username"
                                value={ username }
                                onChange={ this.onChange }
                                type="text"
                                placeholder="Full Name" />
                            <ValidationMessage field="username" />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                className="form-control"
                                name="email"
                                value={ email }
                                onChange={ this.onChange }
                                type="text"
                                placeholder="Email Address" />
                            <ValidationMessage field="email" />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                className="form-control"
                                name="passwordOne"
                                value={ passwordOne }
                                onChange={ this.onChange }
                                type="password"
                                placeholder="Password" />
                            <ValidationMessage field="passwordOne" />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password:</label>
                            <input
                                className="form-control"
                                name="passwordTwo"
                                value={ passwordTwo }
                                onChange={ this.onChange }
                                type="password"
                                placeholder="Confirm Password" />
                            <ValidationMessage field="passwordTwo" />
                        </div>

                        {error &&<p className="text-warning bg-secondary">{error.message}</p>}

                        {/* <button type="submit" className="btn btn-dark btn-lg btn-block">
                            Create Accouont
                        </button> */}
                    </FormValidator>

                    <div className="text-center pt-3">
                        or login with your social account
                    </div>

                    <GoogleLoginButton className="mt-3" />
                    <FacebookLoginButton className="mt-3" />
                    <TwitterLoginButton className="mt-3" />
                </div>
                
            </div>
        )
    }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP} />
    </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink }; 