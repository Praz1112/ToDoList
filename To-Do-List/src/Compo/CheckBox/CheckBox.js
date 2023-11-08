import React from "react";
import Card from "../Card/Card";
import Box from "./Box";
import styles from './box.module.css';

const CheckBox=(props)=>{
    return(
        <>
       <Card className={styles.bon}>
        {props.val.map((eve)=><Box value={props.val} name={eve} key={eve} removeVal={props.removeVal}/>)}
       </Card>
        </>
    );
}

export default CheckBox;