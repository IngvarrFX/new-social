import React from "react";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo";
import MyPostsConnect from "../MyPostsContainer/MyPostsContainer";

type ProfilePropsType = {}

export const Profile = (props: ProfilePropsType) => {
    return (<div>
            <ProfileInfo/>
            <div className={styles.PostsBlock}>
                <MyPostsConnect/>
            </div>
        </div>
    );
};
