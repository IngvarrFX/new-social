import React from "react";
import {LoginForm} from "../Form";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../customHooks/useAppSelectorHook";

export const Login = () => {
    const {isAuth, userId} = useAppSelector(state => state.auth);

    const navigate = useNavigate();
    if (isAuth) {
        navigate(`/profile/${userId}`)
    }

    return (<>
            <h1>Login</h1>
            <LoginForm/>
        </>
    );
};
