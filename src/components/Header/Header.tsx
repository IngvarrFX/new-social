import React from "react";
import styles from "./Header.module.css";
import {Logo} from "../../icons/Logo";
import {Nullable} from "../../types/types";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: Nullable<string>
    isAuth: boolean
}

export const Header = (props: HeaderPropsType) => {
    const {login, isAuth} = props;
    return (<header className={styles.Header}>
            <Logo/>
            <div className={styles.login}>
                {isAuth
                    ? <div>{login}</div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    );
};
