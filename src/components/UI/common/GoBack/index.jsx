import React from "react";
import styles from "./index.module.scss"
import {ReactComponent as Back} from "assets/icons/back.svg"
const GoBack = ({pageName, handleBack}) => {
    return ( 
        <div className={`d-flex justify-content-start align-items-center  ${styles.goback}`}>
            <Back width={30} height={30}/>
            <span className={styles.pageName}>{pageName}</span>
        </div>
     );
}
 
export default GoBack;