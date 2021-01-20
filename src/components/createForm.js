import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const Create = () => {
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [why, setWhy] = useState("");
    const [number, setNumber] = useState("");
    const [errors, setErrors] = useState({});

    const blackmini ={
        backgrounndColor: "black",
        color: "white",
        fontFamily: "Avenir Next",
        fontSize: '10px',
        padding: "5px",
        margin: "0px",
        
    }

    const submitForm = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/projects", {
            description: description, name:name, email: email, number:number, link:link, why:why,
        })
        // what data we need - an object 
        .then((res) => {
        console.log(res.data);
        if(res.data.errors){
            setErrors(res.data.errors)
        }else{
            console.log("Received");
            alert("Thank you. Your application has been received.")
            navigate("/submitted");
        }
        })
        .catch((err) => console.log(err))}

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
            padding: "0px 390px 0px 390px",
            textAlign: 'justify',
            display: "in-line block",
            fontFamily: "Avenir Next",
            fontSize: "17px",
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
            <form onSubmit={submitForm}>

                <label className="m-3">FULL NAME</label>
                <input className="form-control w-50 col-lg-4 offset-lg-4"
                type="text"
                name="name"
                value={ name }
                onChange={ (e) => setName(e.target.value)}/>
                { errors.name ? <p className="text-danger">{errors.name.properties.message} </p>: "" }
                
                <label className="m-3">EMAIL</label>
                <input className="form-control w-50 col-lg-4 offset-lg-4"
                type="text"
                name="email"
                value={ email }
                onChange={ (e) => setEmail(e.target.value)}/>
                { errors.email ? <p className="text-danger">{errors.email.properties.message} </p>: "" }

                <label className="m-3">PHONE NUMBER</label>
                <input className="form-control w-50 col-lg-4 offset-lg-4"
                type="text"
                name="number"
                value={ number }
                onChange={ (e) => setNumber(e.target.value)}/>
                { errors.number ?
                    errors.number.properties ? 
                        <p className="text-danger">{errors.number.properties.message}</p>
                            : <p className="text-danger">{errors.message}</p>
                : "" }

                <label className="m-3">PROJECT NAME + DESCRIPTION</label>
                <input className="form-control w-50 col-lg-4 offset-lg-4"
                type="text"
                name="description"
                value={ description }
                onChange={ (e) => setDescription(e.target.value)}/>
                { errors.description ? <p className="text-danger">{errors.description.properties.message} </p>: "" }

                <label className="m-3">LINK TO PROJECT</label>
                <input className="form-control w-50 col-lg-4 offset-lg-4"
                type="text"
                name="link"
                value={ link }
                onChange={ (e) => setLink(e.target.value)}/>
                { errors.link ? <p className="text-light">{errors.link.properties.message} </p>: "" }
                
                <label className="m-3">WHAT DOES THE YKT LABEL MEAN TO YOU?</label>
                <input className="form-control w-50 col-lg-4 row-lg-5 offset-lg-4"
                type="text"
                name="why"
                value={ why }
                onChange={ (e) => setWhy(e.target.value)}/>
                { errors.why ? <p className="text-light">{errors.why.properties.message} </p>: "" }
                
                <br>
                </br>
                <button type="submit" class="btn btn-outline-light">SUBMIT APPLICATION</button>
            </form>
            <div className="my-5"/>

        </div>)
    }

export default Create;

