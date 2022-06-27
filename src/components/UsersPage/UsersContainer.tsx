import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {UsersStateType} from "../../redux/reducers/usersReducer/types";
import {connect, ConnectedProps} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../Preloader";
import {followTC, getUsersTC, unFollowTC} from "../../redux/reducers/usersReducer/thunks";
import {withAuthRedirect} from "../../customHOCs/withAuthRedirect";

type MyState = {}

export class UsersContainer extends React.Component<PropsFromRedux, MyState> {

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
                    ? <Preloader/>
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
};

const withRedirect = withAuthRedirect(UsersContainer);

const UsersConnect = connect(mapStateToProps, {
    followTC,
    unFollowTC,
    getUsersTC,
});

export type PropsFromRedux = ConnectedProps<typeof UsersConnect>
export default UsersConnect(withRedirect);
