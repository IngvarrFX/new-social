import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {Header} from "./Header";
import {AuthUserDataType, setUserData} from "../../redux/reducers/authReducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";

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
        const {userId, login, email, isAuth} = this.props;
        return <Header
            userId={userId}
            login={login}
            email={email}
            isAuth={isAuth}
        />
    }
}

const mapStateToProps = (state: AppStateType): AuthUserDataType => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
    }
}


const HeaderConnect = connect(mapStateToProps, {setUserData});


export type PropsFromRedux = ConnectedProps<typeof HeaderConnect>
export default HeaderConnect(HeaderContainer);
