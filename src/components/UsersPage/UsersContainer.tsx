import React from "react";
import {AxiosResponse} from "axios";
import {AppStateType, DispatchType} from "../../redux/redux-store";
import {UsersStateType, UserType} from "../../redux/reducers/usersReducer/types";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC, toggleIsFetchingAC,
    unFollowAC
} from "../../redux/reducers/usersReducer/actions";
import {connect, ConnectedProps} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../Preloader";

const axios = require("axios").default;

type MyState = {}

export class UsersContainer extends React.Component<PropsFromRedux, MyState> {

    subscribeHandle = (id: number, followed: boolean) => {
        followed ? this.props.unFollow(id) : this.props.follow(id);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res: AxiosResponse) => {
            this.props.setUsers(res.data.items);
            this.props.setTotalCountUsers(res.data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    onChangeCurrentPage = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((res: AxiosResponse) => {
            this.props.setUsers(res.data.items);
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
    }
};

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (id: number) => dispatch(followAC(id)),
        unFollow: (id: number) => dispatch(unFollowAC(id)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setTotalCountUsers: (totalCount: number) => dispatch(setTotalCountAC(totalCount)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetchingAC(isFetching)),
    }
};

const UsersConnect = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof UsersConnect>
export default UsersConnect(UsersContainer);
