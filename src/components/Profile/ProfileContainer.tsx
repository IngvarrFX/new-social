import React, {useEffect} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/types";
import {Profile} from "./Profile";
import {getUserProfileTC} from "../../redux/reducers/profileReducer/thunks";
import {Nullable} from "../../types/types";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../customHOCs/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    userProfile: UserProfileType | null
    profileId: Nullable<number>
}

type MapDispatchToPropsType = {
    getUserProfileTC: (userId: number) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

export function ProfileContainer(props: ProfileContainerType) {
    const {userId} = useParams<string>();

    useEffect(() => {
        if (userId) {
            props.getUserProfileTC(Number(userId))
            return;
        }
        if (props.profileId) {
            props.getUserProfileTC(props.profileId)
        }
    }, [userId, props.profileId])


    return <>
        <Profile profileData={props.userProfile}/>
    </>

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileId: state.auth.userId,
        userProfile: state.profilePage.userProfile,
    }
}

export default compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, {getUserProfileTC}))(ProfileContainer)
