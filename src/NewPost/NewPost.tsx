import React from "react";
import styles from "./NewPost.module.css"
import {Textarea} from "../Textarea";

type NewPostPropsType = {
    addPost:()=> void
    newPostText:(value: string)=> void
    value: string
}

export const NewPost = (props: NewPostPropsType) => {
   const { addPost, newPostText, value} = props;

    return (
        <div className={styles.Wrapper}>
            <Textarea addCallback={addPost} value={value} newText={newPostText}/>
        </div>
    );
};
