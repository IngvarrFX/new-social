import React from "react";
import styles from "./Input.module.css";

type InputPropsType = React.InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputPropsType) => {
    const { name, ...rest} = props;
    return (<input className={styles.input}  {...rest}/>
    );
};
