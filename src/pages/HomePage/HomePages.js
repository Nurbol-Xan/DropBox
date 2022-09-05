import React from "react"
import { shallowEqual, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import  NavigationComponent from '../../components/HomePageComponents/NavigationComponent';

import '../../CSS/HomeComponent.css';
const HomePage = () => {
    const { isLoggedIn } = useSelector((state) => ({
        isLoggedIn: state.auth.isAuthenticated
    }), shallowEqual);
    return (
        <>
            <NavigationComponent />
            <div className="home-main">
                <div className="home-content">
                    <div className="home">
                        {isLoggedIn?(<Link to='/dashboard' ><div className="wel-btn">Dashboard</div></Link>):(
                            <Link to='/login' className="wel-btn"><div className="wel-btn">GET STARTED</div></Link>
                        )}
                    </div>
                </div>
            </div>      

        </>
    )
}

export default HomePage;