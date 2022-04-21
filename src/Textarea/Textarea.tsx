import React, {ChangeEvent} from "react";
import styles from "./Textarea.module.css";

type TextareaPropsType = {
    callBack: () => void
    dispatch: (action: { type: string, payload: { value: string } }) => void
    value: string
    actionCreator:(value: string)=> {type:string, payload:any}
}

export const Textarea = (props: TextareaPropsType) => {

    const {callBack, dispatch,actionCreator, value} = props;

    const onChangeHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(actionCreator(e.currentTarget.value))
    }
    return (
        <div className={styles.wrapper}>
            <textarea onChange={onChangeHandle} value={value}/>
            <button disabled={!value} onClick={callBack}>add message</button>
        </div>
    );
};
