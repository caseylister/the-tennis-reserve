import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';
import img10 from '../../assets/img10.jpg';
import img11 from '../../assets/img11.jpg';
import img12 from '../../assets/img12.jpg';
import img13 from '../../assets/img13.jpg';
import img14 from '../../assets/img14.jpg';
import img18 from '../../assets/img18.jpg';
import img16 from '../../assets/img16.jpg';

function Gallery() {
    return(
        <section>
            <div className="top-row">
                <img src={img10} alt="baby playing with tennis balls" width="450px" height="450px"></img>
                <img src={img2} alt="kids group class" width="450px" height="450px"></img>
                <img src={img3} alt="a day of yoga" width="450px" height="450px"></img>
                <img src={img8} alt="young kid serving tennis ball" width="450px" height="450px"></img>
            </div>
            <div className="gallery-rows">
                <img src={img5} alt="fire pit at the reserve" width="450px" height="450px"></img>
                <img src={img6} alt="kids group class" width="450px" height="450px"></img>
                <img src={img12} alt="dog sitting on tennis cart" width="450px" height="450px"></img>
                <img src={img4} alt="the tennis reserve bar" width="450px" height="450px"></img>
            </div>
            <div className="gallery-rows">
                <img src={img9} alt="adult women class" width="450px" height="450px"></img>
                <img src={img1} alt="overview of the reserve courts" width="450px" height="450px"></img>
                <img src={img11} alt="rainbow over courts" width="450px" height="450px"></img>
                <img src={img7} alt="sunset time" width="450px" height="450px"></img>
            </div>
            <div className="gallery-rows">
                <img src={img13} alt="morning at the reserve" width="450px" height="450px"></img>
                <img src={img14} alt="baby with tiny tennis racket" width="450px" height="450px"></img>
                <img src={img18} alt="the reserve bar" width="450px" height="450px"></img>
                <img src={img16} alt="the reserve community" width="450px" height="450px"></img>
            </div>
            <div className="social">
                Use the links below to follow more of the fun that happens at The Reserve!
            </div>
        </section>
    );
}

export default Gallery;