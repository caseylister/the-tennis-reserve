import React from "react";

function Footer(){
    return(
        <footer>
            <div className="footer">
                <a href="https://www.facebook.com/tennisreserve" target="_blank">
                    <img src="https://img.icons8.com/office/30/000000/facebook-new.png"/>
                </a>
                <a href="https://www.instagram.com/tennisreserve/" target="_blank">
                    <img src="https://img.icons8.com/office/30/000000/instagram-new.png"/>
                </a>
                <p> &copy;{new Date().getFullYear()} by The Tennis Reserve with ❤️ </p>
            </div>
        </footer>
    )
}

export default Footer;