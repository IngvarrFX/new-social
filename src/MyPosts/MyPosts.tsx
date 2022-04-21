import React from "react";
import styles from "./MyPosts.module.css"
import {NewPost} from "../NewPost";
import {Post} from "../Post";
import {PostType} from "../types";

type MyPostsPropsType = {
    posts: PostType[]
    dispatch: (action: {type: string, payload: any}) => void
    value: string
}

export const MyPosts = (props: MyPostsPropsType) => {
    const {posts, dispatch, value} = props;
    const postElements = posts.map((post, index) => <Post key={index} text={post.message} likes={post.likes}/>)
    return (
        <div>
            <h2 className={styles.HeaderPosts}>My posts</h2>
            <NewPost dispatch={dispatch} value={value}/>
            {postElements}
        </div>
    );
};
