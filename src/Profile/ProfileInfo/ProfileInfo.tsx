import React from "react";
import styles from "./ProfileInfo.module.css";
import img from "../../assets/mainBackground.jpg";

export const ProfileInfo = () => {
    return (
        <div className={styles.Wrapper}>
            <img className={styles.Image}
                 src={img}
                 alt="background"/>
            <div className={styles.Description}>
                Ava + Description
            </div>
        </div>
    );
};
