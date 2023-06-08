import React, { useState } from "react";
import Note from "./Note";
//import Note_Content from "./Note_Content";

/*What I'm basically trying to do this is to change the display of the note content and + button from 
none to block. Now I only need this to change when we click on the note title inputting element. 
Another thing that I require is that as soon as we click elsewhere the box closes. 
So I made the condition that as long as the input text = value of the target at which the mouse 
had clicked, we can set to block else set none.*/


function Note_All(){

    const [text,setText] = useState("");
    const [pText,setpText] =useState("");
    const [val,setVal] = useState("none");
    const [items,setItems] =useState([]);

    function giveText(event){
        var x=event.target.value;
        setText(x);
    }

    function giveParaText(event){
        var y=event.target.value;
        setpText(y);
    }

    function changeDisplay(event){
        //You can use console.log(event) to check the above laid logic.
        console.log(event);
        if(event.target.value === text || event.target.value === pText ||event.target === ".with_input")
        setVal("block");
        else
        {setVal("none");
        //console.log("called");
        }
    }

    function createNote(current,index){
        
        return (
            <Note title={current.title} content={current.content} key={index} 
            id={index} HandleDelete={deleteNote}/>
        )
    }
    

    function addNote(){
        var z={title: text, content: pText};
        setText("");
        setpText("");
        setItems(prevItems => {
            return [...prevItems,z]});
        //Using spread operator we've added new note to prev notes.
        //Now that we've added, let's set the area of inputting back to null, so as to add new content.
        //Also, ensure that your input element has the value attribute set to equal the 
        //values like text and ptext so that they use the null value, after we've used the 
        //respective setting functions. 
        
    }

    // We're sending the deleteNote function as prop value which can be called upon by
    //the onClick function of delete button of note which will in turn pass the id of the note that 
    //we want to delete. The id has been obtained from the map function. 
    function deleteNote(ind){
        setItems(prevItems =>{
            return prevItems.filter(
                (item,index) => {
                    return index!==ind;
                }
            )
        })
    }

    return (
    <div className="with_input" onClick={changeDisplay}>
    <div className="expandClick">
    <input type="text"  placeholder="Here goes the title..." className="inputText" onChange={giveText} value={text}></input>
    <input type="text"  placeholder="Take a note..." className="inputText2"  value={pText}
    style={{display: val}} onChange={giveParaText}></input>
    <button className="addBtn" style={{display: val}} onClick={addNote}>+</button>
    </div>
    <div className="note_all">
        {items.map(createNote)}
    </div>
    </div>
    );
}

export default Note_All;