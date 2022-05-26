import React from "react";
import styles from "./Header.module.css";
import {Logo} from "../../icons/Logo";

export const Header = () => {
    return (<header className={styles.Header}>
            <Logo/>
        </header>
    );
};
