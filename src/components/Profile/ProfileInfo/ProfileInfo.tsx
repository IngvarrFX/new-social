import React from "react";
import styles from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../redux/types";
import ProfileStatusContainer from "../ProfileStatus/ProfileStatusContainer";
import {ProfileDefaultPhoto} from "../../SvgComponents";

type ProfilePropsType = {
    profileData: UserProfileType | null
}

export const ProfileInfo = (props: ProfilePropsType) => {
    const {profileData} = props;
    return (
        <div className={styles.Wrapper}>
            <div className={styles.imageBlock}>
                {
                    profileData?.photos.large
                        ? <img src={profileData?.photos.large} alt="background"/>
                        : <div>
                            <ProfileDefaultPhoto/>
                        </div>
                }
            </div>
            <ProfileStatusContainer/>
            <div className={styles.Description}>
                Ava + Description
            </div>
        </div>
    );
};
