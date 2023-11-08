import React from "react";
import Card from "../Card/Card";
import styles from './box.module.css';

const Box=(props)=>{
const handleRemove=()=>{
  let val=props.value;
  val = val.filter(item => !(item===props.name));
  props.removeVal(val);
}

    return (
        <>
        <Card className={styles.col}>
        <button className={styles.button} onClick={handleRemove}>X</button>
         <h1 className={styles.h1}>{''+props.name}</h1>
         </Card>
        </>
    );
}

export default Box;