import * as types from "../actions/authActions";
import fire  from "../../config/firebase";

const loginUser = (payload) => {
    return {
        type: types.LOGIN_USER,
        payload
    }
}


const logoutUser = () => {
    return{
        type: types.SIGN_OUT,
    }
}


export const signInUser = (email, password) => (dispatch) => {
    fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
        })
        .catch((error) => {
            alert("Invalid email or password!");
        })
}

export const signUpUser = (name, email, password) => (dispatch) => {
    console.log(name, email, password);
}

export const SignOutUser = () => (dispatch) => {
    dispatch(logoutUser());
}