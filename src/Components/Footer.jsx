import React from "react";

function Footer()
{
    var currentDate = new Date();
    var year = currentDate.getFullYear();

    return (
        <footer className="footer">
            <p>Copyright © {year}</p>
        </footer>
    )
}

export default Footer;