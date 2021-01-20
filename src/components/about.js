import React from 'react';
import axios from 'axios';

const About = props => {
    
    const columnStyleOne = {
        color: "white",
        backgroundColor: "black",
        padding: "5px",
        textAlign: 'center',
        display: "in-line block",
        fontFamily: "Helvetica",
        fontSize: "40px",
    };

    const columnStyleThree = {
        color: "white",
        backgroundColor: "black",
        padding: "0px 240px 0px 240px",
        textAlign: 'justify',
        display: "in-line block",
        fontFamily: "Helvetica",
        fontSize: "18px",
    };

    const black ={
        backgrounndColor: "black",
        color: "white",
        fontFamily: "Avenir Next",
        padding: "15px",
        
    }
    const blackmini ={
        backgroundColor: "black",
        color: "white",
        fontFamily: "Avenir Next",
        fontSize: '10px',
        padding: "5px",
        margin: "0px",
        
    }

    return(
    <div className="container-fluid">
        <div style={{height:"300px"}}></div>
        <h1 style={columnStyleOne}> <b>OUR MISSION </b></h1>
        <h2 style={{color: "white", fontSize: "25px"}}><i>We aim to represent Asian culture through the lens of Gen Z.</i></h2>
        <br></br>
        <h3 style={columnStyleThree}><b>YKT Label is an organization that aims to promote rising Asian artists around the world. We are on the hunt for fresh, new talent to find the next generation of Asian artists who can boldly represent Asian culture in a modern and fashionable way. We specialize in music for YouTube videos and film. We hope to grow our base with the very first strong set of artists to feature on our platforms.</b></h3>
        <br></br>
        <h3 style={columnStyleThree}><b>We're on the lookout for artists and producers that can create Trap, Hip-Hop, Lofi and Asian Pop music. We're looking for tracks that can grab attention, add rhythm, or serve as chill beats for any occasion. Asian culture tied into the lyrics is always a plus.</b></h3>
        <div style={{height:"300px"}}></div>
    </div>
    )

}
export default About;