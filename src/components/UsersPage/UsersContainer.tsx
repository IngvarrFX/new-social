import React from "react";
import {AxiosResponse, default as axios} from "axios";
import {AppStateType} from "../../redux/redux-store";
import {UsersStateType} from "../../redux/reducers/usersReducer/types";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from "../../redux/reducers/usersReducer/actions";
import {connect, ConnectedProps} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../Preloader";

type MyState = {}

export class UsersContainer extends React.Component<PropsFromRedux, MyState> {

    subscribeHandle = (id: number, followed: boolean) => {
        followed ? this.props.unFollow(id) : this.props.follow(id);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res: AxiosResponse) => {
            this.props.setUsers(res.data.items);
            this.props.setTotalCount(res.data.totalCount);
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

const UsersConnect = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalCount,
    setCurrentPage,
    toggleIsFetching,
});

export type PropsFromRedux = ConnectedProps<typeof UsersConnect>
export default UsersConnect(UsersContainer);
