import React from "react";
import styles from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

export const NavBar = () => {

    const pages = ["Profile", "Messages","Music", "News", "Settings"]


    return (<nav className={styles.NavBar}>
            <div className={styles.Links}>
                {pages.map((page, index) => <NavLink
                    className={(navData: { isActive: boolean }) => navData.isActive ? styles["Active"] : ""}
                    key={index}
                    to={`/${page.toLowerCase()}`}>{page}</NavLink>)}
            </div>
        </nav>
    );
};
