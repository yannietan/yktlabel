import { Link, navigate, Router} from '@reach/router';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import slide1 from '../image/slide1.png'
import slide2 from '../image/slide2.png'
import slide3 from '../image/slide3.png'
import slide4 from '../image/slide4.jpg'
import red from '../image/red.JPG'
import cup from '../image/cupscene.png'
import grey from '../image/grey.png'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../App.css';


const HomeScreen = (props) => {
    const slideImages = [
        slide1,
        slide2,
        slide3,
        slide4,
    ];

    const whiteText = {
        display: "in-line block",
        fontFamily: "Avenir Next",
        color: 'white',
    }

    const columnStyleOne = {
        color: "black",
        backgroundColor: "white",
        padding: "12px 18px 12px 18px",
        margin: "80px",
        width: "300px",
        height: "100px",
        display: "in-line block",
        fontFamily: "Avenir Next",
        fontSize: '20px'
    };
    const imageStyle = {
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    };
    const bottomImageStyle = {
        height: '520px',
        objectFit: 'cover'
    };

    return (
        <div>
        <div className="m-1 pt-3 text-white text-right">
        <h1><b>THE YKT LABEL.</b></h1>
        </div>
        <div className="m-1 pb-4 text-white text-right">
        <h4><b>JOIN THE MOVEMENT.</b></h4>
        </div>
        <div>
            <div className="slide-container">
            <Slide>
            <div>
                <div style={{'backgroundImage': `url(${slideImages[0]})`, ...imageStyle}}>
                <div style = {{'width': '1200px', 'height': '500px'}}></div>
                </div>
            </div>
            <div>
                <div style={{'backgroundImage': `url(${slideImages[1]})`, ...imageStyle}}>
                <div style = {{'width': '1200px', 'height': '500px'}}></div>
                </div>
            </div>
            <div>
                <div style={{'backgroundImage': `url(${slideImages[2]})`, ...imageStyle}}>
                    <div style = {{'width': '1200px', 'height': '500px'}}></div>
                </div>
            </div>
            <div>
                <div style={{'backgroundImage': `url(${slideImages[3]})`, ...imageStyle}}>
                    <div style = {{'width': '1200px', 'height': '500px'}}></div>
                </div>
            </div>
            </Slide>
        </div>
        </div>
        <div className="my-5">
        <h1 style={whiteText}> <b> WE'RE HERE TO CREATE CHANGE. </b></h1>
        <h2 style={whiteText}> SHOW US WHAT YOU'VE GOT. </h2>
        </div>
        <div className="my-5">
        <Link to="/new" style={columnStyleOne}><b>APPLY NOW</b></Link>
        </div>
        <div className="row">
        <div className="col-sm mx-3 container">
                <button className="btn pull-left" style={{backgroundColor:"white"}}><a style={{color:"black"}} href="https://www.youtube.com/watch?v=Lr7OKj_GQJU"> DISCOVER </a></button>
                <div>
                <a href="#"><img  src={red} style={{width: "99%", ...bottomImageStyle}}></img></a></div>
            </div>
            <div className="col-sm mx-3 container">
                <button className="btn pull-left" style={{backgroundColor:"white"}}><a style={{color:"black"}} href="https://www.youtube.com/c/YannieTan/videos"> DISCOVER </a></button>
                <div>
                <a href="#"><img  src={grey} style={{width: "99%", ...bottomImageStyle}}></img></a></div>
            </div>
            <div className="col-sm mx-3 container">
                <button className="btn pull-left" style={{backgroundColor:"white"}}><a style={{color:"black"}} href="https://www.youtube.com/watch?v=Cryb9TRNf04&feature=youtu.be"> DISCOVER </a></button>
                <div>
                <a href="#"><img  src={slide4} style={{width: "99%", ...bottomImageStyle}}></img></a></div>
            </div>
        </div>
    </div>
    )
}
export default HomeScreen
