import React from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import styles from "./LoginForm.module.css";
import {loginTC} from "../../redux/reducers/authReducer/thunks";
import {Button} from "../Button";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useAppDispatch} from "../../customHooks/useAppDispatch";


const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
}).required();


export const LoginForm = () => {

    const dispatch = useAppDispatch();

    const {register, handleSubmit, formState: {errors, touchedFields}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        dispatch(loginTC({email: data.email, password: data.password, rememberMe: data.rememberMe}))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input className={styles.fields} {...register("email", {required: true})}
                   placeholder="Email"
                   autoComplete="off"
                   autoCapitalize={"off"}
                   type="text"
            />
            <div className={styles.errorMessage}>{errors.email && errors.email.message}</div>

            <input className={styles.fields} {...register("password", {required: true,})}
                   placeholder="Password"
                   autoComplete="off"
                   autoCapitalize={"off"}
                   type={"password"}
            />
            <div className={styles.errorMessage}>{errors.password && errors.password.message}</div>

            <label htmlFor="remember">Remember me
                <input id="remember" type="checkbox" {...register("rememberMe")} /></label>

            <Button disabled={!!errors.password} type={"submit"}>Login</Button>
        </form>
    );
};
