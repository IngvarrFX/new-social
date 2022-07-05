import React from "react";
import styles from "./ProfileStatus.module.css";
import {EditableSpan} from "../../EditableSpan";
import {Nullable} from "../../../types/types";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
    userId: Nullable<number>
}


export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const {status, updateStatus} = props;
    return (
        <div className={styles.container}>
            <span>Status: </span>
            <EditableSpan text={status} callback={updateStatus} />
        </div>
    );
};
