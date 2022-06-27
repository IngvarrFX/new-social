import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {Nullable} from "../../types/types";
import {authMeTC} from "../../redux/reducers/authReducer/thunks";
import {withAuthRedirect} from "../../customHOCs/withAuthRedirect";

type MyStateType = {};

class HeaderContainer extends React.Component<PropsFromRedux, MyStateType> {
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

type MapStateToPropsType = {
    login: Nullable<string>
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}
const withRedirect = withAuthRedirect(HeaderContainer);

const HeaderConnect = connect(mapStateToProps, {authMeTC});


export type PropsFromRedux = ConnectedProps<typeof HeaderConnect>
export default HeaderConnect(withRedirect);
