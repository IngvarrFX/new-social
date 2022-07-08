import React from "react";
import {MyPosts} from "../MyPosts";
import {connect} from "react-redux";
import {AppStateType, DispatchType} from "../../redux/redux-store";
import {addPostAC} from "../../redux/reducers/profileReducer/actions";
import {compose} from "redux";
import {withAuthRedirect} from "../../customHOCs/withAuthRedirect";
import {PostType} from "../../types";

type MapStateToPropsType = {
    posts: PostType[]
    value: string
}

type MapDispatchToPropsType = {
    addPostCallback: (newPost: string) => void
}

type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const MyPostsContainer = (props: MyPostsPropsType) => {
    const {posts, addPostCallback} = props;

    const addNewPostHandle = (newPost: string) => {
        addPostCallback(newPost);
    };

    return <MyPosts posts={posts} addPost={addNewPostHandle}/>
};

const mapStateToProps = (state: AppStateType) => ({
    posts: state.profilePage.posts,
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    addPostCallback: (newPost: string) => dispatch(addPostAC(newPost)),
})

export default compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(MyPostsContainer)


