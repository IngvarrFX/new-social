import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {Nullable} from "../../types/types";
import {authMeTC} from "../../redux/reducers/authReducer/thunks";
import {withAuthRedirect} from "../../customHOCs/withAuthRedirect";

type MyStateType = {};

type MapStateToPropsType = {
    login: Nullable<string>
    isAuth: boolean
}

type MapDispatchToPropsType = {
    authMeTC: () => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<OwnPropsType, MyStateType> {
    componentDidMount() {
        this.props.authMeTC();
    }

    render() {
        const {login, isAuth} = this.props;
        return <Header
            login={login}
            isAuth={isAuth}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, {authMeTC}))(HeaderContainer)
