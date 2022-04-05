import React, {useState} from "react";
import styles from "./NavBar.module.css";
import {Link} from "react-router-dom";

export const NavBar = () => {

    const [active, setActive] = useState("")


    const pages = ["Profile", "Messages", "Dialogs", "News", "Settings"]

    const onClickHandle = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
        setActive(page);
    }

    return (<nav className={styles.NavBar}>
            <div className={styles.Links}>
                {pages.map((page, index) => <Link
                    className={page === active ? styles[page] : ""}
                    onClick={(e) => onClickHandle(e, page)}
                    key={index}
                    to={`/${page.toLowerCase()}`}>{page}</Link>)}
            </div>
        </nav>
    );
};
