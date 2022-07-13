import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {UsersStateType, UserType} from "../../redux/reducers/usersReducer/types";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../Preloader";
import {followTC, getUsersTC, unFollowTC} from "../../redux/reducers/usersReducer/thunks";
import {withAuthRedirect} from "../../customHOCs/withAuthRedirect";
import {compose} from "redux";
import styles from "./UsersPage.module.css";

type MyState = {}

type MapStateToPropsType = {
    users: UserType[]
    totalUsersCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchToPropsType = {
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
    getUsersTC: (pageNumber?: number) => void
}

export class UsersContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType, MyState> {

    subscribeHandle = (id: number, followed: boolean) => {
        if (followed) {
            this.props.unFollowTC(id);
        } else {
            this.props.followTC(id);
        }
    }

    componentDidMount() {
        this.props.getUsersTC();
    }

    onChangeCurrentPage = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber);
    }

    render() {
        return (<>
                {this.props.isFetching

                    ?<div className={styles.preloader}><Preloader/></div>
                    : <Users
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        onChangeCurrentPage={this.onChangeCurrentPage}
                        subscribeHandle={this.subscribeHandle}
                        isFollowingProgress={this.props.followingInProgress}
                    />
                }
            </>

        )
    }
}


const mapStateToProps = (state: AppStateType): UsersStateType => {
    return {
        users: state.users.users,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        pageSize: state.users.pageSize,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress,
    }
}

export default compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps,
    {
        followTC,
        unFollowTC,
        getUsersTC,
    }))(UsersContainer)
