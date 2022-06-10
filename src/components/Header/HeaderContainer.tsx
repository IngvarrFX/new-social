import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {Header} from "./Header";
import {setUserData} from "../../redux/reducers/authReducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Nullable} from "../../types/types";

type MyStateType = {};

class HeaderContainer extends React.Component<PropsFromRedux, MyStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        }).then((res) => {
            if (res.data.resultCode === 0) {
                const {id, login, email} = res.data.data;
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
