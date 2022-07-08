import React from "react";
import styles from "./Header.module.css";
import {Logo} from "../../icons/Logo";
import {Nullable} from "../../types/types";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOutTC} from "../../redux/reducers/authReducer/thunks";
import {Button} from "../Button";

type HeaderPropsType = {
    login: Nullable<string>
    isAuth: boolean
}

export const Header = (props: HeaderPropsType) => {
    const {login, isAuth} = props;
    const dispatch = useDispatch<any>();
    const onClickLogout = () => {
        dispatch(logOutTC());
    }

    return (<header className={styles.Header}>
            <Logo/>
            <div className={styles.login}>
                {isAuth
                    ? <div>
                        <div>Profile name: {login}</div>
                        <Button onClick={onClickLogout}>Logout</Button>
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    );
};
