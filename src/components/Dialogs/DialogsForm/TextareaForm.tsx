import React, {useEffect} from "react";
import styles from "./DialogsForm.module.css";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {Button} from "../../Button";
import {Send} from "../../SvgComponents";

type DialogsFormPropsType = {
    addCallback: (message: string) => void
}

export const TextareaForm = (props: DialogsFormPropsType) => {
    const {addCallback} = props;
    const {
        register,
        handleSubmit,
        reset,
        formState,
    } = useForm();
    const addMessageHandle: SubmitHandler<FieldValues> = (data) => {
        addCallback(data.newMessage)
    };

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({newMessage: ""});
        }
    }, [formState, reset]);
    return (
        <form className={styles.form} onSubmit={handleSubmit(addMessageHandle)}>
            <textarea  {...register("newMessage")} placeholder="Enter your message" autoComplete="off"/>
            <Button type={"submit"}><Send/></Button>
        </form>
    );
};
