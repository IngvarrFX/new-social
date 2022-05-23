import React from "react";
import {MyPosts} from "../MyPosts";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType, DispatchType} from "../redux/redux-store";
import {addPostAC, newPostTextAC} from "../redux/reducers/profileReducer/actions";

type MyPostsPropsType  = PropsFromRedux

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

const MyPostsConnect = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof MyPostsConnect>
export default MyPostsConnect(MyPostsContainer);


