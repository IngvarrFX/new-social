import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {ProfileStatus} from "./ProfileStatus";
import {AppStateType} from "../../../redux/redux-store";
import {updateProfileStatusTC} from "../../../redux/reducers/profileReducer/thunks";
import {Nullable} from "../../../types/types";

type MapStateToPropsType = {
    status: string
    userId: Nullable<number>
}

type MapDispatchToPropsType = {
    updateProfileStatusTC: (status: string) => void
}

class ProfileStatusContainer extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {

    render() {
        return <ProfileStatus
            status={this.props.status}
            userId={this.props.userId}
            updateStatus={this.props.updateProfileStatusTC}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        status: state.profilePage.profileStatus,
        userId: state.auth.userId
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {updateProfileStatusTC}))(ProfileStatusContainer)
