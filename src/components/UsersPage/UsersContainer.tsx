import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {UsersStateType} from "../../redux/reducers/usersReducer/types";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers, setToggleFollowingProgress,
    toggleIsFetching,
    unFollow
} from "../../redux/reducers/usersReducer/actions";
import {connect, ConnectedProps} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../Preloader";
import {userAPI, UsersResponseType} from "../../api";

type MyState = {}

export class UsersContainer extends React.Component<PropsFromRedux, MyState> {

    subscribeHandle = (id: number, followed: boolean) => {
        this.props.setToggleFollowingProgress(true, id);
        if (followed) {
            userAPI.unFollowOnUser(id).then((data) => {
                if (data.resultCode === 0) {
                    this.props.unFollow(id)
                    this.props.setToggleFollowingProgress(false, id);
                }
            }).catch((error) => console.log(error))
        } else {
            this.props.setToggleFollowingProgress(true, id);
            userAPI.followOnUser(id).then((data) => {
                if (data.resultCode === 0) {
                    this.props.follow(id)
                    this.props.setToggleFollowingProgress(false, id);
                }
            }).catch((error) => console.log(error))
        }
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data: UsersResponseType) => {
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    onChangeCurrentPage = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data: UsersResponseType) => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        });
    }

    render() {
        return (<>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        onChangeCurrentPage={this.onChangeCurrentPage}
                        subscribeHandle={this.subscribeHandle}
                        isFollowingProgress={this.props.toggleFollowingProgress}
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
        toggleFollowingProgress: state.users.toggleFollowingProgress,
    }
};

const UsersConnect = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalCount,
    setCurrentPage,
    toggleIsFetching,
    setToggleFollowingProgress,
});

export type PropsFromRedux = ConnectedProps<typeof UsersConnect>
export default UsersConnect(UsersContainer);
