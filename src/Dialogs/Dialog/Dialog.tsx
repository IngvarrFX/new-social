import React from "react";
import styles from "./Dialog.module.css";

type DialogPropsType = {
    messages: Array<string>
}

export const Dialog = (props: DialogPropsType) => {
    const {messages} = props;
    return (
        <div>
            {
                messages.map((message,index)=> <div key={index}>{message}</div>)
            }
        </div>
    );
};
