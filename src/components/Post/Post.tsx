import React from "react";
import styles from "./Post.module.css"
import {Likes} from "../SvgComponents";
import {Button} from "../Button";


type PostPropsType = {
    text: string
    likes: number
}

export const Post = (props: PostPropsType) => {
    const {text, likes} = props;
    return (
        <div className={styles.PostWrapper}>
            <img style={{width: "50px"}}
                 src="https://w7.pngwing.com/pngs/601/312/png-transparent-social-media-avatar-graphy-digital-media-profile-blue-text-logo.png"
                 alt="avatar"/>
            <div>
                <div className={styles.postText}>{text}</div>
                <div className={styles.likes}>
                    <Button><Likes/></Button>
                    <div className={styles.count}>{likes}</div>
                </div>
            </div>
        </div>
    );
};
