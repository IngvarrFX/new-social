import React from "react";
import {Dialogs} from "../../Dialogs";
import {connect} from "react-redux";
import {AppStateType, DispatchType} from "../../../redux/redux-store";
import {useParams} from "react-router-dom";
import {addMessage} from "../../../redux/reducers/dialogsReducer/actions";
import {withAuthRedirect} from "../../../customHOCs/withAuthRedirect";
import {compose} from "redux";
import {DialogsType} from "../../../types";

type MapStateToPropsType = {
    dialogs: DialogsType[] | undefined
}

type MapDispatchToPropsType = {
    addMessageCallback: (id: string, message: string) => void
}

type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

export const DialogsContainer = (props: DialogsPropsType) => {
    const {dialogs, addMessageCallback} = props;

    const params = useParams();

    const onClickHandle = (message: string) => {
        if (params["*"]) {
            addMessageCallback(params["*"], message);
        }
    };

    return <Dialogs dialogs={dialogs} callBack={onClickHandle} />
};

const mapStateToProps = (state: AppStateType) => ({
    dialogs: state.messagePage.dialogs,
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    addMessageCallback: (id: string, message: string) => dispatch(addMessage(id, message))
})

export default compose<React.ComponentType>(withAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(DialogsContainer)


