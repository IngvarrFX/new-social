import React from "react";
import styles from "./ProfileInfo.module.css";
import avatar from "../../../assets/avatar.png";
import {UserProfileType} from "../../../redux/types";
import ProfileStatusContainer from "../ProfileStatus/ProfileStatusContainer";

type ProfilePropsType = {
    profileData: UserProfileType | null
}

export const ProfileInfo = (props: ProfilePropsType) => {

    return (
        <div className={styles.Wrapper}>
            <div className={styles.imageBlock}>
                <img src={props.profileData?.photos.large ? props.profileData?.photos.large : avatar}
                     alt="background"/>
            </div>
            <ProfileStatusContainer/>
            <div className={styles.Description}>
                Ava + Description
            </div>
        </div>
    );
};
