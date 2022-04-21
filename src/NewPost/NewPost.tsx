import React from "react";
import styles from "./NewPost.module.css"
import {Textarea} from "../Textarea";
import {addPostAC, newPostTextAC} from "../redux/reducers/profileReducer";

type NewPostPropsType = {
    dispatch: (action: { type: string, payload: any }) => void
    value: string
}

export const NewPost = (props: NewPostPropsType) => {

    const {dispatch, value} = props;

    const onClickHandle = () => {
        dispatch(addPostAC())
    }
    return (
        <div className={styles.Wrapper}>
            <Textarea callBack={onClickHandle} dispatch={dispatch} value={value} actionCreator={newPostTextAC}/>
        </div>
    );
};
