import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Applications = props => {
    const [projects, setProject] = useState([]);
    
    const getProjects = () => {
        axios.get("http://localhost:8000/api/projects")
        //get requests don't need {}
            .then(res => {
                console.log(res.data)
                setProject(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect( () => {
        getProjects();
    }, []);

    const mapProjects = (item) => {
        axios.put(`http://localhost:8000/api/projects`,
        //projects is a list, but project is from the map     
        {
            description: item.description,
            name: item.name,
            number: item.number,
            link: item.link,
            why: item.why,
        })
        //get requests don't need {}
        .then(res => {
            console.log(res.data)
            // setProject([...projects, res.data]);                
        })
        .catch(err => console.log(err));
    }

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
        <div>
            <h1 style={{color: "white"}}>Submissions</h1>
            <div>
            {
                projects.map((project, i) =>
                <div style={{color:"white"}}>
                    <p>Full Name: {project.name}</p>
                    <p>Email: {project.email}</p>
                    <p>Number: {project.number}</p>
                    <p>Project link: {project.link}</p>
                    <p>Project Name: {project.description}</p>
                    <p>Why YKT: {project.why}</p>
                </div>
                )
            }
            </div>
        </div>
    )

    }
    export default Applications
