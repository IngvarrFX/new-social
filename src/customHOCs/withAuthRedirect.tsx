import React from "react";
import {useNavigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type WithAuthRedirectType = {
    isAuth: boolean;
};

const mapStateToProps = (state: AppStateType): MapPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

type MapPropsType = {
    isAuth: boolean
}

type DispatchPropsType = {}

export function withAuthRedirect<P>(WrappedComponent: React.ComponentType<P>) {

    const ComponentWithRedirect: React.FC<MapPropsType & DispatchPropsType> = (props) => {
        const navigate = useNavigate();

        React.useEffect(() => {
            if (!props.isAuth) {
                navigate("/login");
            }
        }, [props.isAuth]);
        return <WrappedComponent {...props as unknown as P} />;
    };
    return connect<WithAuthRedirectType, {}, P, AppStateType>(mapStateToProps, {})(ComponentWithRedirect);
}


/*import React from "react";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
} as MapPropsType);

type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
        let {isAuth, ...restProps} = props
        const navigate = useNavigate();

        React.useEffect(() => {
            if (!isAuth) {
                navigate('/login');
            }
        },[isAuth]);

        return <WrappedComponent {...restProps as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(
        mapStateToPropsForRedirect, {})
    (RedirectComponent)

    return ConnectedAuthRedirectComponent;
}*/


