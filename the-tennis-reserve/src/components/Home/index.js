import React from "react";
import coverImage from '../../assets/cover.jpg';
import play from "../../assets/play.jpg";
import learn from "../../assets/learn.jpg";
import grow from "../../assets/grow.jpg";

function Home(){
    return(
        <section className="my-5">
            <h1 className="title">The Tennis Reserve</h1>
            <img src={coverImage} className="my-2 cover-img" alt="cover" />
            <div className="about">
                About us paragraph here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="plg">
                <img src={play} alt="tennis rackets" className="vectors"></img>
                <img src={learn} alt="learn with love" className="vectors"></img>
                <img src={grow} alt="grow!" className="vectors"></img>
            </div>
            <div className="plg">
                <p className="vector-title">Play</p>
                <p className="vector-title">Learn</p>
                <p className="vector-title">Grow</p>
            </div>
        </section>
    )
}

export default Home;