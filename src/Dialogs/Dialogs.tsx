import React from "react";
import {Route, Routes} from "react-router-dom";
import {Message} from "./Message";

import styles from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem";
import {Textarea} from "../Textarea";
import {DialogsType} from "../types";

type DialogsPropsType = {
    dialogs: DialogsType[] | undefined;
    value: string
    callBack: () => void
    newMessage: (text: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    const {dialogs, value, callBack, newMessage} = props;


    const dialogElements = dialogs?.map((dialog: DialogsType, index: number) =>
        <div className={styles.Dialog}
             key={index}>
            <DialogItem id={dialog.id} name={dialog.name}/>
        </div>);

    const messageElements = dialogs?.map((dialog: DialogsType, index: number) =>
        <Route key={index}
               path={`/${dialog.id}`}
               element={<Message messages={dialog.messages}/>}/>)
    return (
        <div className={styles.Dialogs}>
            <div className={styles.DialogsItem}>
                {dialogElements}
            </div>
            <div className={styles.Messages}>
                <Routes>
                    {messageElements}
                </Routes>
                <Textarea addCallback={callBack} value={value} newText={newMessage}/>
            </div>

        </div>
    );
};
