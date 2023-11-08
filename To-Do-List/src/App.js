import './App.css';
import Form from './Compo/Form/Form';
import React, { useState } from 'react';
import CheckBox from './Compo/CheckBox/CheckBox';
import './App.css';

function App() {
  const [value,setValue] =useState([]);
  return (
    <>
   <Form addVal={setValue}/>
   {value.length>0&&<CheckBox val={value} removeVal={setValue}/>}
   </>
  );
}

export default App;
