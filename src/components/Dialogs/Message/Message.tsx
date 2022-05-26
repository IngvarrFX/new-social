import React from "react";
import styles from "./Message.module.css";

type MessagePropsType = {
    messages: Array<string>
}

export const Message = (props: MessagePropsType) => {
    const {messages} = props;
    return (
        <div>
            {
                messages.map((message, index) => <div key={index}>{message}</div>)
            }
        </div>
    );
};
