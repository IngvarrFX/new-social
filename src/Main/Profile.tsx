import React from "react";
import styles from "./Main.module.css";
import {MyPosts} from "../MyPosts";

export const Profile = () => {
    return (<div>
            <img className={styles.Image} src="https://media.vtolvr-mods.com/uploaded_mod_images/microsft_samFSwDJrePO6.jpg"
                 alt="background"/>
            <div>
                Ava + Description
            </div>
            <MyPosts/>
        </div>
    );
};
