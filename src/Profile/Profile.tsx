import React from "react";
import styles from "./Profile.module.css";
import {MyPosts} from "../MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {PostType} from "../types";

type ProfilePropsType = {
    posts: PostType[]
}

export const Profile = (props: ProfilePropsType) => {
    const {posts} = props;
    return (<div>
            <ProfileInfo/>
            <div className={styles.PostsBlock}>
                <MyPosts posts={posts}/>
            </div>

        </div>
    );
};
