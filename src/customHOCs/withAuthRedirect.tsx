import React from "react";
import {useNavigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";

type WithAuthRedirectType = {
    isAuth: boolean;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

type MapStateToPropsType = {
    isAuth: boolean
}

type DispatchPropsType = {}

export function withAuthRedirect<P>(WrappedComponent: React.ComponentType<P>) {

    const ComponentWithRedirect: React.FC<MapStateToPropsType & DispatchPropsType> = (props) => {
        const navigate = useNavigate();

        React.useEffect(() => {
            if (!props.isAuth) {
                navigate("/login");
            }
        }, [props.isAuth]);
        return <WrappedComponent {...props as unknown as P} />;
    };
    return compose<React.ComponentType>(connect<WithAuthRedirectType, {}, P, AppStateType>(mapStateToProps, {}))(ComponentWithRedirect);
}
