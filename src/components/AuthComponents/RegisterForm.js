import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/actionCreators/authActionCreator";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordCon] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !password || !passwordCon){
            alert("Please fill in all fields");
            return;
        }
        if(password !== passwordCon){
            alert("Password do not match");
            return;
        }

        dispatch(signUpUser(name, email, password));
    }

    return(
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group my-2">
                <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={name} 
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group my-2">
                <input 
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group my-2">
                <input 
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group my-2">
                <input 
                type="password"
                name="passwordCon"
                className="form-control"
                placeholder="Password Confirmation"
                value={passwordCon} 
                onChange={(e) => setPasswordCon(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary my-2 form-control">Register</button>
        </form>
    )
};

export default RegisterForm;