import React from "react";
import styles from "./Profile.module.css";
import {MyPosts} from "../MyPosts";
import {ProfileInfo} from "./ProfileInfo";

export const Profile = () => {
    return (<div>
            <ProfileInfo/>
            <div className={styles.PostsBlock}>
                <MyPosts/>
            </div>

        </div>
    );
};
