import React from "react";
import Note_All from "./Note_All";
import Sidebar from "./Sidebar";

function Content(){
    return (
        <div class="content">
            <Sidebar />
            <Note_All />
        </div>
    )
}

export default Content;