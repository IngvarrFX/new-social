import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import styles from "./LoginForm.module.css";
import {useDispatch} from "react-redux";
import {loginTC} from "../../redux/reducers/authReducer/thunks";
import {Button} from "../Button";

type IFormInput = {
    email: string;
    password: string;
    rememberMe: string;
}


export const LoginForm = () => {

    const dispatch = useDispatch<any>();

    const {register, handleSubmit} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => {
        dispatch(loginTC(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input {...register("email", {required: true, maxLength: 20})} placeholder="Email" autoComplete="off"/>
            <input {...register("password", {required: true,})} placeholder="Password" autoComplete="off" type={"password"}/>
            <div>
                <label>Remember me: </label>
                <input type="checkbox" {...register("rememberMe")} />
            </div>
            <Button type={"submit"}>Login</Button>
        </form>
    );
};
