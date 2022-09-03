import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { SignOutUser } from "../../redux/actionCreators/authActionCreator";

const NavigationComponent = () => {
    const { isAuthenticated, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand ms-5" to="/">REact APP</Link>

            <ul className="navbar-nav ms-auto me-5">
                {
                    isAuthenticated ? (
                        <>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user.displayName}
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link class="dropdown-item" to="/dashboard">Dashboard</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><button class="dropdown-item" onClick={() => dispatch(SignOutUser())}>Sign Out</button></li>
                                </ul>
                            </li>
                        </>
                    ) : (
                        <>
                             <li className="nav-item mx-2">
                                <Link className="btn btn-primary btn-sm" to="/login">Login</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="btn btn-success btn-sm" to="/register">Sign Up</Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </nav>   
    )
}

export default NavigationComponent;