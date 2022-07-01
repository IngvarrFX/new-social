import React from "react";
import {Dialogs} from "../../Dialogs";
import {connect} from "react-redux";
import {AppStateType, DispatchType} from "../../../redux/redux-store";
import {useParams} from "react-router-dom";
import {addMessage, newMessageText} from "../../../redux/reducers/dialogsReducer/actions";
import {withAuthRedirect} from "../../../customHOCs/withAuthRedirect";
import {compose} from "redux";
import {DialogsType} from "../../../types";

type MapStateToPropsType = {
    dialogs: DialogsType[] | undefined
    value: string
}

type MapDispatchToPropsType = {
    addMessageCallback: (id: string) => void
    newMessageTextCallback: (value: string) => void
}

type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

export const DialogsContainer = (props: DialogsPropsType) => {
    const {dialogs, value, newMessageTextCallback, addMessageCallback} = props;

    const params = useParams();

    const onClickHandle = () => {
        if (params["*"]) {
            addMessageCallback(params["*"]);
        }
    };

    const newMessageText = (text: string) => {
        newMessageTextCallback(text);
    };

    return <Dialogs dialogs={dialogs} value={value} callBack={onClickHandle} newMessage={newMessageText}/>
};

const mapStateToProps = (state: AppStateType) => ({
    dialogs: state.messagePage.dialogs,
    value: state.messagePage.newMessage,
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    addMessageCallback: (id: string) => dispatch(addMessage(id)),
    newMessageTextCallback: (value: string) => dispatch(newMessageText(value))
})

export default compose<React.ComponentType>(withAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(DialogsContainer)


