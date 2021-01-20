import React from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const Submitted = props => {
    

    const columnStyleThree = {
        color: "white",
        backgroundColor: "black",
        padding: "0px 240px 0px 240px",
        textAlign: 'center',
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
        <div style={{height:"100px"}}></div>
        <Link style={blackmini} className="float-left m-2" to="/">BACK</Link>
            <br></br>
            <br></br>
        
        <h1 style={columnStyleThree}> <b>Thank you. Your application has been received and will be reviewed shortly.</b></h1>
        <div style={{height:"800px"}}></div>
    </div>
    )

}
export default Submitted;