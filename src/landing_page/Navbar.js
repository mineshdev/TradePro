import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom">
            <div className="container">

                <a className="navbar-brand" href="#">
                    <img
                        src="media/images/logo.svg"
                        alt="Logo"
                        style={{ width: "150px" }}
                    />
                </a>

                <div className="collapse navbar-collapse show">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#">Signup</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#">Products</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#">Pricing</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#">Support</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#">
                                <i className="fa fa-bars"></i>
                            </a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;