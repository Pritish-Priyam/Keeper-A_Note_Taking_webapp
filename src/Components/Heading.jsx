import React, { useState } from "react";

function Heading(props){
    var x="#ffffff";
    var y="#202124";
    const [val,setVal] = useState(false);
    const [col,setCol] = useState(x);
    const [iconCol,setIconCol] = useState(y);

    function handleClick(){
        setVal(!val);
        props.onCheck(val);

        if(val===true)
        {setCol(y);setIconCol(x);}
        else
        {setCol(x);setIconCol(y);}

        x="#ffffff";
    }

    return (
        <div className="head" style={{backgroundColor: col, color: iconCol }}>
        <button className="btn" ><i class="material-symbols-outlined ">menu</i></button>
        <div className="title">
        <button className="btn2"><i class="material-symbols-outlined "
        style={{color:"#fbbc04"}}>description</i></button>
        <h1 className="heading">Keeper</h1>
        </div>
        <div className="search_wrapper">
        <input type="search" placeholder="Search" className="search_bar" style={{color: col}}></input>
        <button className="btn1"><i class="material-symbols-outlined">search</i></button>
        </div>
        <button className="btn btnVis"><i class="material-symbols-outlined">refresh</i></button>
        <button className="btn" onClick={handleClick}><i class="material-symbols-outlined">contrast</i></button>
        <button className="btn btnVis"><i class="material-symbols-outlined">settings</i></button>
        <button className="btn"><i class="material-symbols-outlined">account_circle</i></button>
        </div>
    )
}

export default Heading;
