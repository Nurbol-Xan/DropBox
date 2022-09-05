import React,{ useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import LoginForm from "../../../components/AuthComponents/LoginForm";
import { signInWithGoogle,signInWithGithub, signInWithFacebook } from '../../../config/firebase';
import { loginUser } from "../../../redux/actionCreators/authActionCreator";

const Login = () => {
    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogle = (e) => {
        e.preventDefault();
        signInWithGoogle().then((data) => {
            console.log(data.user.email);
            dispatch(loginUser({
                displayName:data.user.displayName, 
                email:data.user.email, 
                uid:data.user.uid}))
            setSuccess(true);
        })
        .catch((err) => {
            alert(err)
        })
    }

    const handleGithub = (e) => {
        e.preventDefault();
        signInWithFacebook().then((data) => {
            console.log(data.user.email);
            dispatch(loginUser({
                displayName:data.user.displayName, 
                email:data.user.email, 
                uid:data.user.uid}))
            setSuccess(true);
        })
        .catch((err) => {
            alert(err)
        })
    }

    const handleFacebook = (e) => {
        e.preventDefault();
        signInWithGithub().then((data) => {
            console.log(data.user.email);
            dispatch(loginUser({
                displayName:data.user.displayName, 
                email:data.user.email, 
                uid:data.user.uid}))
            setSuccess(true);
        })
        .catch((err) => {
            alert(err)
        })
    }



    useEffect(() => {
        if (success) {
            navigate("/dashboard")
        }
    },[success,navigate])
    
    return(
        <div class="row m-5 no-gutters shadow-lg">
            <div className="col-md-6 d-none d-md-block">
            <img src="https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" className="img-fluid" style={{"minHeight":"100%"}} alt="side login"/>
            </div>
            <div class="col-md-6 bg-white p-5 text-center my-auto">
                <h1 className="my-5 text-center">Login Here</h1>
                <div className="col">
                    <div className="d-flex justify-content-center row-md-3 center mx-auto mt-5">
                        <button className="btn shadow" onClick={handleGoogle}><img src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt="google"/></button>
                        <button className="btn shadow" onClick={handleGithub}><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github"/></button>
                        <button className="btn shadow" onClick={handleFacebook}><img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="facebook"/></button>
                    </div>
                    <div className="mx-auto mt-5">
                        <LoginForm />
                        <Link to="/register">
                            Not a member? Register
                        </Link>
                    </div>  
                </div>
            </div>
        </div>
    )
};

export default Login;