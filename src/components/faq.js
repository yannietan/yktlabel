import { Link, navigate, Router} from '@reach/router';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Faq = props => {
    
    const columnStyleOne = {
        color: "white",
        backgroundColor: "black",
        padding: "5px",
        textAlign: 'center',
        display: "in-line block",
        fontFamily: "Helvetica",
        fontSize: "40px",
    };
    const columnStyleTwo = {
        color: "white",
        backgroundColor: "black",
        padding: "5px",
        textAlign: 'center',
        display: "in-line block",
        fontFamily: "Avenir Next",
        fontSize: "30px",
    };
    const columnStyleThree = {
        color: "white",
        backgroundColor: "black",
        padding: "0px 390px 0px 390px",
        textAlign: 'justify',
        display: "in-line block",
        fontFamily: "Avenir Next",
        fontSize: "17px",
    };

    const columnStyleFour = {
        color: "white",
        backgroundColor: "black",
        padding: "5px",
        textAlign: 'center',
        display: "in-line block",
        fontFamily: "Avenir Next",
        fontSize: "21px",
    };

    const black ={
        backgrounndColor: "black",
        color: "white",
        fontFamily: "Avenir Next",
        padding: "15px",
        
    }
    const blackmini ={
        backgrounndColor: "black",
        color: "white",
        fontFamily: "Avenir Next",
        fontSize: '10px',
        padding: "5px",
        margin: "0px",
        
    }
    return(
    <div className="container-fluid">
        <br></br>
        
        <h1 style={columnStyleOne}> <b>JOIN THE LABEL. APPLY NOW. </b></h1>
        <br></br>
        <h2 style={columnStyleTwo}>ELIGIBILITY</h2>
        <p style={columnStyleThree}> The YKT Label evaluates projects based on 3 main criteria. As a music organization aimed to raise awareness of Asian/Asian American musicians, we emphasize the importance of cultural relevance within the music and brand of the artist.
         </p>
         <h2 style={columnStyleFour}>Creativity + Originality</h2>
        <p style={columnStyleThree}> Artists are assessed on their creativity and originality. No stock music, samples, or uncredited forms of art may be used.
         </p>
         <ul style={columnStyleThree}>
         <li>Original music only, no remixes</li>
         <li>No 3rd party samples</li>
         <li>Vocal samples, instrumental tracks, backing vocals, vocal effects are all acceptable.</li>
         <li>Must be a final mix</li>
         <li>Track length should not exceed 5 minutes.</li>
         </ul>
         <h2 style={columnStyleFour}>Quality</h2>
        <p style={columnStyleThree}> Artists will be assessed on the quality of the submission and the amount of time the submission appears to have taken. Extra points for artwork demonstrating cultural relevance to Asians/Asian Americans.</p>
        <h2 style={columnStyleFour}>Musicality</h2>
        <p style={columnStyleThree}> Artists will be assessed based on how well the music reflects the YKT Label brand. Research into our previous projects will aid in understanding the YKT Label brand in more detail Trust yourself, and be confident in your work.</p>
        <div className="m-5"></div>
        <h2 style={columnStyleTwo}>FAQ</h2>
        <h2 style={columnStyleThree}><b>Do you have a music genre preference?</b></h2>
        <p style={columnStyleThree}> All music genres are welcome. The themes presented in the lyrics or music video are more important in our consideration.</p>
        <h2 style={columnStyleThree}><b>What if I've never made a song/music video before?</b></h2>
        <p style={columnStyleThree}>Don't worry! Though we do prefer more professional recordings and videos, you should still apply. Give yourself a chance, and who knows!</p>
    </div>
    )

}
export default Faq;