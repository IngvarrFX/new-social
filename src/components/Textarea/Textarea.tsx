import React, {ChangeEvent} from "react";
import styles from "./Textarea.module.css";

type TextareaPropsType = {
    addCallback: () => void
    value: string
    newText: (value: string) => void
}

export const Textarea = (props: TextareaPropsType) => {

    const {addCallback, newText, value} = props;

    const onChangeHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
        newText(e.currentTarget.value);
    };

    const addNewPostHandle = () => {
        addCallback();
    }
    return (
        <div className={styles.wrapper}>
            <textarea onChange={onChangeHandle} value={value}/>
            <button onClick={addNewPostHandle}>add message</button>
        </div>
    );
};
