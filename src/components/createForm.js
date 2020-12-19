import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const Create = () => {
    const [project, setProject] = useState("");
    const [date, setDate] = useState("");
    const [errors, setErrors] = useState({});

    const submitForm = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/projects/new", {
            project: project, date:date, status: 'new'
        })
        // what data we need - an object 
        .then((res) => {
        console.log(res.data);
        if(res.data.errors){
            setErrors(res.data.errors)
        }else{
            navigate("/");
        }
        })
        .catch((err) => console.log(err))}

        const mystyle = {
            color: "white",
            backgroundColor: "LightBlue",
            padding: "10px",
            fontFamily: "Arial"
        };


        return (
        <div>
            <h1>Plan a New Project</h1>
            <p style={mystyle}><Link to="/">Back to Dashboard</Link></p>
            <form onSubmit={submitForm}>
                <label>Project Name</label>
                <input className="form-control w-50 col-lg-4 offset-lg-4"
                type="text"
                name="project"
                value={ project }
                onChange={ (e) => setProject(e.target.value)}/>
                { errors.project ? <p className="text-danger">{errors.project.properties.message} </p>: "" }

                <label>Due Date</label>
                <input className="form-control w-50 col-lg-4 offset-lg-4"
                type="date"
                name="date"
                value={ date }
                onChange={ (e) => setDate(e.target.value)}/>
                { errors.date ? <p className="text-danger">{errors.date.properties.message} </p>: "" }
                <br>
                </br>
                <button type="submit" class="btn btn-outline-success">Plan Project</button>
            </form>
        </div>)
    }

export default Create;

