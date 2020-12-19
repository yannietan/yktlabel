import { Link, navigate, Router} from '@reach/router';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home = props => {
    const [projects, setProject] = useState([]);
    const [midList, setMidList] = useState([]);
    const [newList, setNewList] = useState([]);
    
    const getProjects = () => {
        axios.get("http://localhost:8000/api/projects")
        //get requests don't need {}
            .then(res => {
                console.log(res)
                setProject(res.data);
            })
            .catch(err => console.log(err));
        axios.get("http://localhost:8000/api/projects/progress")
        //get requests don't need {}
            .then(res => {
                console.log(res)
                setMidList(res.data);
            })
            .catch(err => console.log(err));
        axios.get("http://localhost:8000/api/projects/completed")
        //get requests don't need {}
            .then(res => {
                console.log(res)
                setNewList(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect( () => {
        getProjects();
    }, []);

    const makeStart = (project) => {
        axios.put(`http://localhost:8000/api/projects/${project._id}`,
        //project.id not projects.id => projects is a list, but project is from the map     
        {
            status: "progress",
            _id: project._id,
            project: project.project,
            date: project.date
        })
        //get requests don't need {}
            .then(res => {
                console.log(res)
                setProject(projects.filter((proj) => (proj._id !== project._id)))
                projects.filter((proj) => (proj.status === "new"))                
                setMidList([...midList, res.data]);                

            })
            .catch(err => console.log(err));
    }

    const makeMid = (project) => {
        axios.put(`http://localhost:8000/api/projects/${project._id}`,
        //project.id not projects.id => projects is a list, but project is from the map     
        {
            status: "completed",
            _id: project._id,
            project: project.project,
            date: project.date
        })
        //get requests don't need {}
            .then(res => {
                console.log(res)
                setMidList(midList.filter((proj) => (proj._id !== project._id)))
                midList.filter((proj) => (proj.status === "progress" && proj.status !== "new"))
                setNewList([...newList, res.data]);  // create the new list add in res.specific id

            })
            .catch(err => console.log(err));
    }

    const remove = (e, project) => {
        e.preventDefault();
        //update state (what we're seeing)
        //update mongo (long term storage)
        axios.delete(`http://localhost:8000/api/projects/${project._id}`)
        // get requests don't need {}
            .then(res => {
                console.log(res)
                setNewList(newList.filter((proj) => (proj._id !== project._id)))
            })
            .catch(err => console.log(err));
        }
    
    const columnStyleOne = {
        borderRadius: "25px",
        color: "white",
        backgroundColor: "LightBlue",
        padding: "10px",
        width: "300px",
        height: "80px",
        display: "in-line block",

        fontFamily: "Avenir"
    };
    const columnStyleTwo = {
        borderRadius: "25px",
        color: "white",
        backgroundColor: "Maroon",
        padding: "10px",
        width: "300px",
        height: "80px",
        display: "in-line block",
        fontFamily: "Avenir"
    };

    return(
    <div className="container-fluid">
        <br></br>
        <div className="row">
            <div className="col">
            <div style={columnStyleOne}>
                <h1> Backlog </h1>
            </div>
                {projects.map( (project, i) => 
                    <div className="col-sm-6 mb-3">
                        <div className="card mt-2 h-70 border-info">
                            <div className="card-header bg-info text-light text-center">{project.project}</div>
                            <div className="card-body text-left">
                                <p>Project Name: {project.project}</p>
                                <p>Date: {project.date}</p>
                                <p>{project.status}</p>
                            </div>
                        <button onClick={(e) => makeStart(project)}>Click to Start</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="col">
                <div style={columnStyleTwo}>
                    <h1>In Progress </h1>
                </div>
                {midList.map( (project, i) => 
                    <div className="col-sm-6 mb-4">
                        <div className="card mt-2 h-70 border-info">
                            <div className="card-header bg-info text-light text-center">{project.project}</div>
                            <div className="card-body text-left">
                                <p>Project Name: {project.project}</p>
                                <p>Date: {project.date}</p>
                                <p>{project.status}</p>
                            </div>
                        <button onClick={(e) => makeMid(project)}>Complete</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="col">
            <div style={columnStyleOne}>
            <h1> Completed </h1>
            </div>
                {newList.map( (project, i) => 
                    <div className="col-sm-6 mb-4">
                        <div className="card mt-2 h-70 border-info">
                            <div className="card-header bg-info text-light text-center">{project.project}</div>
                            <div className="card-body text-left">
                                <p>Project Name: {project.project}</p>
                                <p>Date: {project.date}</p>
                                <p>{project.status}</p>
                            </div>
                        <button onClick={(e) => remove(e, project)}>Click to Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <div>
            <br></br>
        <button className="btn-large btn-info"><Link to="/new">Add New Project</Link></button>
        </div>
    </div>
    )

}
export default Home;