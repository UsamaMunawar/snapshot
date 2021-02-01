import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link  } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#jhb">Snapshot</a>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link  className={`nav-link`} to="/">Home</Link >
                    </li>
                    <li className="nav-item">
                        <Link  className={`nav-link`} to="/about">About</Link >
                    </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}


export default Navbar