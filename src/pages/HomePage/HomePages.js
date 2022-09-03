import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actionCreators/authActionCreator";


const HomePage = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    useEffect(() => {
      if (isAuthenticated) {
        navigation('/dashboard')
      }
    }, [isAuthenticated,navigation]);
  
    return (
        <>
            <h2>Welcome my.....</h2>  
        </>
    )
}

export default HomePage;