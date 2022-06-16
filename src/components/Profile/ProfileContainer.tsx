import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/types";
import {Profile} from "./Profile";
import {setUserProfile} from "../../redux/reducers/profileReducer/actions";
import {profileAPI} from "../../api/api";

type MyState = {}

export class ProfileContainer extends React.Component<PropsFromRedux, MyState> {

    componentDidMount() {
        profileAPI.getUserProfile(2).then((userProfileData) => {
            this.props.setUserProfile(userProfileData);
        });
    }

    render() {
        return <>
            <Profile/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): { userProfile: UserProfileType | null } => {
    return {
        userProfile: state.profilePage.userProfile,
    }
}

const ProfileConnect = connect(mapStateToProps, {setUserProfile});

export type PropsFromRedux = ConnectedProps<typeof ProfileConnect>
export default ProfileConnect(ProfileContainer);
