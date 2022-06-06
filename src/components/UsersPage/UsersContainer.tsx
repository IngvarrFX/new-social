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
import {UsersPage} from "./UsersPage";


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
export default UsersConnect(UsersPage);
