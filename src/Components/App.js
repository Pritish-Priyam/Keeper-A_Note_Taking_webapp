import './App.css';
import Heading from "./Heading";
import Footer from './Footer';
import Content from './Content';
import React, { useState } from 'react';

function App() {

  const [color,setCol] = useState("#fffefe");


  function changeColor(x){

    console.log(x);
    if(x === true)
    {setCol("#202124");}
    else
    {setCol("#fffefe");};

    console.log(color)
  }


  return (
    <div style={ {backgroundColor: color}}>
      <Heading onCheck={changeColor}/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
