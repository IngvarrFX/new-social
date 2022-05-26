import React from "react";
import styles from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    id: string
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {

    const {id, name} = props;
    return (<NavLink
            to={`/messages/${id}`}
            className={(navData) => navData.isActive ? styles["Active"] : ""}
        >{name}</NavLink>
    );
};
