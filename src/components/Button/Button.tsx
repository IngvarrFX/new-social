import React from "react";
import styles from "./Button.module.css"

type ButtonPropsType = {
    children: React.ReactNode | string
} & React.ButtonHTMLAttributes<HTMLButtonElement>


export const Button = (props: ButtonPropsType) => {
    const {children, ...rest} = props;
    const textStyle = typeof children === "string" ? styles.Button + " " + styles.text : styles.Button;
    return (<button {...rest} className={textStyle}>
            {children}
        </button>
    );
};
