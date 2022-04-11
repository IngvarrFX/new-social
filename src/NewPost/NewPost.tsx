import React from "react";
import styles from "./NewPost.module.css"

export const NewPost = () => {
    return (
        <div className={styles.Wrapper}>
            <textarea/>
            <button>Add</button>
        </div>
    );
};
