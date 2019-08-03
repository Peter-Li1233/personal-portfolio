import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import './logo.css';
import logo from './peter.jpg';

const Navigation = () => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to={ROUTES.LANDING}>
            <img src={logo} className="myLogo" alt='peter-logo'></img>
        </Link>

        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nonAuthNavigation"
            aria-expanded="false"
            aria-controls="nonAuthNavigation" aria-label="Toggle navigation">
            <i className="fa fa-angle-double-down"></i>
        </button>

        <div className="collapse navbar-collapse" id="nonAuthNavigation">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={ROUTES.HOME}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={ROUTES.RESUME}>Resume</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={ROUTES.PROJECTS}>Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={ROUTES.CONTACT}>Contact</Link>
                </li>
            </ul>

            <ul className="navbar-nav pull-right">
                <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.SIGN_UP}>
                                <i className="fa fa-user" aria-hidden="true"></i> Sign Up
                        </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={ROUTES.SIGN_IN}>
                            <i className="fa fa-sign-in" aria-hidden="true"></i> Login
                    </Link>
                </li>
            </ul>
        </div>

    </nav>
);

const NavigationAuth = () => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to={ROUTES.LANDING}>Peter Li</Link>

        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nonAuthNavigation"
            aria-expanded="false"
            aria-controls="nonAuthNavigation" aria-label="Toggle navigation">
            <i className="fa fa-angle-double-down"></i>
        </button>

        <div className="collapse navbar-collapse" id="nonAuthNavigation">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={ROUTES.HOME}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={ROUTES.RESUME}>Resume</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={ROUTES.PROJECTS}>Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={ROUTES.CONTACT}>Contact</Link>
                </li>
            </ul>

            <ul className="navbar-nav pull-right">
                <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle bg-dark"  id="navbarDropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Profile<span className="caret"></span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to={ROUTES.ACCOUNT}>Account</Link>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" >Sign Out</button>
                    </div>
                </li>
            </ul>
        </div>

    </nav>
);

export default Navigation;