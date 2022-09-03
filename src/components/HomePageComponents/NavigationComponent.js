import React, { useState,useEffect }from "react";
import { Link,useNavigate } from "react-router-dom"
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { SignOutUser } from "../../redux/actionCreators/authActionCreator";


const NavigationComponent = () => {
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user } = useSelector(
      (state) => ({
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user,
      }),
      shallowEqual
    );
  
    useEffect(() => {
        if(success) {
            navigate("/");
        }
    }, [success]);

    const logout = () => {
      dispatch(SignOutUser(setSuccess));
    };


    return( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand ms-5" to="/">REact APP</Link>
            {isAuthenticated?
            (<div className="navbar-nav ms-auto me-5">
                <div className="navbar-item mx-2">
                    <button 
                      className="btn btn-primary" 
                      onClick={() =>logout()}
                    >
                        SIGN OUT
                    </button>
                </div>
            </div>)
            :(<ul className="navbar-nav ms-auto me-5">
                <li className="nav-item mx-2">
                    <Link className="btn btn-primary btn-sm" to="/login">Login</Link>
                </li>
                <li className="nav-item mx-2">
                    <Link className="btn btn-success btn-sm" to="/register">Sign Up</Link>
                </li>
            </ul>)}

        </nav>   
    )
}

export default NavigationComponent;