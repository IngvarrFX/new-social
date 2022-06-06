import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/store";
import {Profile} from "./Profile";
import {AxiosResponse, default as axios} from "axios";
import {setUserProfile} from "../../redux/reducers/profileReducer/actions";

type MyState = {}

export class ProfileContainer extends React.Component<PropsFromRedux, MyState> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`).then((res: AxiosResponse) => {
            this.props.setUserProfile(res.data);
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
