import React from "react";
import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
        <form>
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
            <button type="submit" className="btn btn-primary my-2 form-control">Login</button>
        </form>
        </>
    )
};

export default LoginForm;