import React from "react";
import styles from "./Profile.module.css";
import {MyPosts} from "../MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {PostType} from "../types";

type ProfilePropsType = {
    posts: PostType[]
    dispatch: (action: {type: string, payload: any}) => void
    value: string
}

export const Profile = (props: ProfilePropsType) => {
    const {posts, dispatch, value} = props;
    return (<div>
            <ProfileInfo/>
            <div className={styles.PostsBlock}>
                <MyPosts posts={posts} dispatch={dispatch} value={value}/>
            </div>

        </div>
    );
};
