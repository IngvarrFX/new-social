import React from "react";
import {AxiosResponse} from "axios";
import {AppStateType, DispatchType} from "../../redux/redux-store";
import {UsersStateType, UserType} from "../../redux/reducers/usersReducer/types";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/reducers/usersReducer/actions";
import {connect, ConnectedProps} from "react-redux";
import {Users} from "./Users";

const axios = require("axios").default;

type MyState = {}

export class UsersContainer extends React.Component<PropsFromRedux, MyState> {

    subscribeHandle = (id: number, followed: boolean) => {
        followed ? this.props.unFollow(id) : this.props.follow(id);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res: AxiosResponse) => {
            this.props.setUsers(res.data.items);
            this.props.setTotalCountUsers(res.data.totalCount);
        });
    }

    onChangeCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((res: AxiosResponse) => {
            this.props.setUsers(res.data.items);
        });
    }

    render() {
        return (
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onChangeCurrentPage={this.onChangeCurrentPage}
                subscribeHandle={this.subscribeHandle}
            />
        )
    }
}


const mapStateToProps = (state: AppStateType): UsersStateType => {
    return {
        users: state.users.users,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        pageSize: state.users.pageSize,
    }
};

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (id: number) => dispatch(followAC(id)),
        unFollow: (id: number) => dispatch(unFollowAC(id)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setTotalCountUsers: (totalCount: number) => dispatch(setTotalCountAC(totalCount)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
    }
};

const UsersConnect = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof UsersConnect>
export default UsersConnect(UsersContainer);
