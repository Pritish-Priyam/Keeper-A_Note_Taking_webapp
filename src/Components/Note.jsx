import React from "react";

function Note(props){

    function deleteNote(){
        props.HandleDelete(props.id);
    }

    return (
        <div className="note">
                <h1>{props.title}</h1>
                <p className="greater_height">{props.content}</p>
                <div className="btnNote_wrapper">
                <button className="btnNote" title="Font-Color"><i class="material-symbols-outlined" style={{fontSize: "20px"}}>format_color_text</i></button>
                <button className="btnNote" title="Change Background"><i class="material-symbols-outlined" style={{fontSize: "20px"}}>wallpaper</i></button>
                <button className="btnNote" title="Share"><i class="material-symbols-outlined" style={{fontSize: "20px"}}>share</i></button>
                <button className="btnNote" title="Color"><i class="material-symbols-outlined" style={{fontSize: "20px"}}>palette</i></button>
                <button className="btnNote" title="Delete" onClick={deleteNote}><i class="material-symbols-outlined" style={{fontSize: "20px"}}>delete</i></button>
                <button className="btnNote" title="Collaborate"><i class="material-symbols-outlined" style={{fontSize: "20px"}}>groups</i></button>
                </div>
        </div>
    )
}

export default Note;