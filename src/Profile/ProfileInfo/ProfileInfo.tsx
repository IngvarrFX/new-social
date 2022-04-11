import React from "react";
import styles from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div className={styles.Wrapper}>
            <img className={styles.Image}
                 src="https://media.vtolvr-mods.com/uploaded_mod_images/microsft_samFSwDJrePO6.jpg"
                 alt="background"/>
            <div className={styles.Description}>
                Ava + Description
            </div>
        </div>
    );
};
