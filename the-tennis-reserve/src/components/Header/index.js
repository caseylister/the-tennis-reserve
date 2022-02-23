import React, { useState } from "react";
import Nav from "../Nav";
import Home from "../Home";
import Contact from "../Contact";
import Gallery from "../Gallery";
import Services from "../Services";
import logo from '../../assets/logo.png'

function Header(){
    const [currentPage, handlePageChange] = useState('Home');

    const renderPage = () => {
        switch(currentPage){
            case "Home":
                return <Home></Home>
            case "Gallery":
                return <Gallery></Gallery>
            case "Services":
                return <Services></Services>
            case "Contact":
                return <Contact></Contact>
            default:
                return <Home></Home>
        }
    };
    return (
        <header className="flex-row px-1">
            <div className="flex-row header-block">
                <h2>
                    <a href="/">
                        <img src={logo} alt="tennis reserve logo" width="70"></img>
                    </a>
                </h2>
                <div className="flex-row">
                    {/* set up current page when clicked */}
                    <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
                </div>
            </div>
            <div className="flex-row mq-pages">
                {renderPage()}
            </div>
        </header>
    )
};

export default Header;