import React from "react";
import {Route, Routes, useParams} from "react-router-dom";
import {Message} from "./Message";

import styles from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem";
import {DialogsType} from "../types";
import {Textarea} from "../Textarea";
import {addMessageAC, newMessageTextAC} from "../redux/reducers/dialogsReducer";

type DialogsPropsType = {
    dialogs: DialogsType[]
    value: string
    dispatch: (action: {type: string, payload: any}) => void
}


export const Dialogs = (props: DialogsPropsType) => {
    const {dialogs, value, dispatch} = props;

    const params = useParams();


    const onClickHandle = () => {
        if(params["*"]){
            dispatch(addMessageAC(params["*"]));
        }

    }


    const dialogElements = dialogs.map((dialog, index) =>
        <div className={styles.Dialog}
             key={index}>
            <DialogItem id={dialog.id} name={dialog.name}/>
        </div>);

    const messageElements = dialogs.map((dialog, index) =>
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
                    <Textarea callBack={onClickHandle} value={value} dispatch={dispatch} actionCreator={newMessageTextAC} />
            </div>

        </div>
    );
};
