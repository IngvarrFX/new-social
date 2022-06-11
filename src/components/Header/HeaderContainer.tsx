import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {Header} from "./Header";
import {setUserData} from "../../redux/reducers/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Nullable} from "../../types/types";
import {authAPI} from "../../api/api";

type MyStateType = {};

class HeaderContainer extends React.Component<PropsFromRedux, MyStateType> {
    componentDidMount() {
        authAPI.authMe().then((data) => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data;
                this.props.setUserData(id, login, email, true);
            }
        })
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


const HeaderConnect = connect(mapStateToProps, {setUserData});


export type PropsFromRedux = ConnectedProps<typeof HeaderConnect>
export default HeaderConnect(HeaderContainer);
