import Styles from "./Toggle.module.scss"
import React from "react";
const Toggle = ({ value, onChange, register }) => {
    return (
        <div
            className={`${Styles.Switch} ${value ? Styles.active : ""}`}
            onClick={() => onChange(!value)}
            {...register}
        >
            <div
                className={`${Styles.Thumb} ${value ? Styles.active : ""}`}
            ></div>
        </div>
    );
}

export default Toggle;