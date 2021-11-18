import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className="nav flex">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-white pe-3" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Nav;