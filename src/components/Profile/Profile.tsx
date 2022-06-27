import React from "react";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo";
import MyPostsConnect from "../MyPostsContainer/MyPostsContainer";
import {UserProfileType} from "../../redux/types";

type ProfilePropsType = {
    profileData: UserProfileType | null
}

export const Profile = (props: ProfilePropsType) => {
    const {profileData} = props;
    return (<div>
            <ProfileInfo profileData={profileData}/>
            <div className={styles.PostsBlock}>
                <MyPostsConnect/>
            </div>
        </div>
    );
};
