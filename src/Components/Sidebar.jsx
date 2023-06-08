import React from "react";

function Sidebar(){
    return (
        <div className="sidebar">
            <button className="btnSide"><i class="material-symbols-outlined">lightbulb</i></button>
            <button className="btnSide"><i class="material-symbols-outlined">edit</i></button>
            <button className="btnSide"><i class="material-symbols-outlined">notifications</i></button>
            <button className="btnSide"><i class="material-symbols-outlined">share</i></button>
            <button className="btnSide"><i class="material-symbols-outlined">delete</i></button>
        </div>
    )
}

export default Sidebar;