import React from "react";
import styles from "./MyPosts.module.css"
import {NewPost} from "../NewPost";
import {Post} from "../Post";

export const MyPosts = () => {
    return (
        <div>
            <h2 className={styles.HeaderPosts}>My posts</h2>
            <NewPost/>
            <Post text={"Hello world!"} likes={5}/>
            <Post text={"My first post!"} likes={3}/>
        </div>
    );
};
