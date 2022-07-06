import React, {ChangeEvent, useEffect, useState} from "react";

type EditableSpanPropsType = {
    text: string
    callback: (value: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    const {text, callback} = props;

    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(text);

    useEffect(()=> {
        setValue(text);
    },[text])


    const onUnEditMode = () => {
        setEditMode(false)
        text !== value && callback(value)
    }

    const onEditMode = () => {
        setEditMode(true)
    }
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (<>
            {editMode
                ? <input value={value} type={text} onChange={onChangeStatus} onBlur={onUnEditMode} autoFocus/>
                : <span onDoubleClick={onEditMode}>{text ? text : "Create status"}</span>
            }
        </>
    );
}
