import React from "react";
import styles from "./NewPost.module.css"
import {TextareaForm} from "../Dialogs/DialogsForm";

type NewPostPropsType = {
    addPost:(post: string)=> void
}

export const NewPost = (props: NewPostPropsType) => {
   const { addPost} = props;

    return (
        <div className={styles.Wrapper}>
            <TextareaForm addCallback={addPost}/>
        </div>
    );
};
