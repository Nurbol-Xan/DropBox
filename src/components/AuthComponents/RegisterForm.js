import React, { useState } from "react";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordCon] = useState("");

    return(
        <form>
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