import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/types";
import {Profile} from "./Profile";
import {getUserProfileTC} from "../../redux/reducers/profileReducer/thunks";

type MyState = {}

export class ProfileContainer extends React.Component<PropsFromRedux, MyState> {

    componentDidMount() {
        this.props.getUserProfileTC();
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

const ProfileConnect = connect(mapStateToProps, {getUserProfileTC});

export type PropsFromRedux = ConnectedProps<typeof ProfileConnect>
export default ProfileConnect(ProfileContainer);
