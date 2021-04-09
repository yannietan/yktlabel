import React from 'react';
import { Link } from '@reach/router';

const Create = () => {
    const blackmini ={
        backgrounndColor: "black",
        color: "white",
        fontFamily: "Avenir Next",
        fontSize: '10px',
        padding: "5px",
        margin: "0px",

    }

        const mystyle = {
            color: "white",
            backgroundColor: "black",
            padding: "10px",
            fontFamily: "Avenir Next",
            align: "left",
        };

        const columnStyleThree = {
            color: "white",
            backgroundColor: "black",
            padding: "0px 20px 30px",
            textAlign: 'justify',
            display: "block",
            fontFamily: "Avenir Next",
            fontSize: "17px",
            maxWidth: "700px",
            margin: "0 auto"
        };
        return (
        <div style={mystyle}>
            <Link style={blackmini} className="float-left m-2" to="/">BACK</Link>
            <br></br>
            <br></br>
            <div className="my-5"/>
            <h1>APPLICATION FORM</h1>
            <div className="my-3"/>
            <label style={columnStyleThree}>Please submit your work as a YouTube link. If your work does not include a music video, we ask that your YouTube video include a piece of cover art. If you are selected, you will hear back from us within 2-3 weeks with more information and logistics. We wish you the best of luck, and we look forward to your submissions. If you have any questions regarding the submissions process, please email yktlabel@gmail.com.</label>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfNUb8siGyLPyLV15_V6LJiQd6np9wjjMmF6psuV1NIegLXQw/viewform?embedded=true" width="700" height="640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <div className="my-5"/>

        </div>)
    }

export default Create;
