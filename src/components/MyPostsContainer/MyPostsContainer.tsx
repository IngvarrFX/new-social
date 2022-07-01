import React from "react";
import {MyPosts} from "../MyPosts";
import {connect} from "react-redux";
import {AppStateType, DispatchType} from "../../redux/redux-store";
import {addPostAC, newPostTextAC} from "../../redux/reducers/profileReducer/actions";
import {compose} from "redux";
import {withAuthRedirect} from "../../customHOCs/withAuthRedirect";
import {PostType} from "../../types";

type MapStateToPropsType = {
    posts: PostType[]
    value: string
}

type MapDispatchToPropsType = {
    addPostCallback: () => void
    newPostTextCallback: (value: string) => void
}

type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const MyPostsContainer = (props: MyPostsPropsType) => {
    const {posts, value, addPostCallback, newPostTextCallback} = props;

    const addNewPostHandle = () => {
        addPostCallback();
    };

    const newPostTextHandle = (text: string) => {
        newPostTextCallback(text);
    }

    return <MyPosts posts={posts} addPost={addNewPostHandle} newPostText={newPostTextHandle} value={value}/>
};

const mapStateToProps = (state: AppStateType) => ({
    posts: state.profilePage.posts,
    value: state.profilePage.newPostText,
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    addPostCallback: () => dispatch(addPostAC()),
    newPostTextCallback: (value: string) => dispatch(newPostTextAC(value))
})

export default compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(MyPostsContainer)


