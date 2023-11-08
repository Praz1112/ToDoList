import React,{useRef} from 'react';
import Card from '../Card/Card';
import styles from './Form.module.css';

const Form=(props)=>{
    const name=useRef();
    const handleSubmit=(event)=>{
           event.preventDefault();
           let temp=(name.current.value);
           if(temp==='')return;
           props.addVal((val)=>{
            return [...val,temp];
           });
           name.current.value='';
    }
    return(
        <>
        <Card className={styles.box}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>Name:</label>
            <input type='text' ref={name}></input>
            <br></br>
            <input type='submit' className={styles.sub}></input>
        </form>
        </Card>
        </>
    );
}
export default Form;