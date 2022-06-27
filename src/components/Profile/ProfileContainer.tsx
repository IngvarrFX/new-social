import React, {useEffect} from "react";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/types";
import {Profile} from "./Profile";
import {getUserProfileTC} from "../../redux/reducers/profileReducer/thunks";
import {Nullable} from "../../types/types";
import {useParams} from "react-router-dom";

export function ProfileContainer(props: PropsFromRedux) {
    const {userId} = useParams<string>();

    useEffect(() => {
        if (userId) {
            props.getUserProfileTC(Number(userId))
        }
        if(props.profileId){
            props.getUserProfileTC(props.profileId)
        }
    }, [userId,props])


    return <>
        <Profile profileData={props.userProfile}/>
    </>

}

type MapStateToPropsType = {
    userProfile: UserProfileType | null
    profileId: Nullable<number>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileId: state.auth.userId,
        userProfile: state.profilePage.userProfile,
    }
}

const ProfileConnect = connect(mapStateToProps, {getUserProfileTC});

export type PropsFromRedux = ConnectedProps<typeof ProfileConnect>
export default ProfileConnect(ProfileContainer);
