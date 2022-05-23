import {AppStateType, DispatchType} from "../redux/redux-store";
import {UsersStateType, UserType} from "../redux/reducers/usersReducer/types";
import {followAC, setUsersAC, unFollowAC} from "../redux/reducers/usersReducer/actions";
import {connect, ConnectedProps} from "react-redux";
import {UsersPage} from "./UsersPage";


const mapStateToProps = (state: AppStateType): UsersStateType => {
    return {
        users: state.users.users,
    }
};

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (id: number) => dispatch(followAC(id)),
        unFollow: (id: number) => dispatch(unFollowAC(id)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
    }
};

const UsersConnect = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof UsersConnect>
export default UsersConnect(UsersPage);
