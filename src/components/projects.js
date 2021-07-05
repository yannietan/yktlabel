import ReactPlayer from "react-player"
import React from "react"

const Projects = (props) => {
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
        display: "in-line block",
        fontFamily: "Helvetica",
        fontSize: "22px",
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

    return (
    <div>
    <h1 style={columnStyleOne}><b>YKT FEATURES</b></h1>
    <br></br>
    <h2 style={columnStyleThree}> <b>YANNIE TAN | TIA-JANE FOWLER | JIMMY LIU | KATERINA MIA | KATIE HAN | GOLD REVERE | SEOUL FLY | GARETH T | JASON TANG</b> </h2>
    <h2 style={blackmini}>MORE ARTISTS TO COME</h2>
    <div className="m-5" style={{display:"inline-block"}}>
        <ReactPlayer
            url="https://www.youtube.com/watch?v=T0TLTCIYPkg"
        />
    </div>
    <div className="m-5" style={{display:"inline-block"}}>
        <ReactPlayer
            url="https://youtu.be/Lr7OKj_GQJU"
        />
    </div>
    <div className="m-5" style={{display:"inline-block"}}>
        <ReactPlayer
            url="https://www.youtube.com/watch?v=-1Gh3wIkDSE"
        />
    </div>
    <div className="m-5" style={{display:"inline-block"}}>
        <ReactPlayer
            url="https://www.youtube.com/watch?v=Cryb9TRNf04&feature=youtu.be"
        />
    </div>
    <div className="m-5" style={{display:"inline-block"}}>
        <ReactPlayer
            url="https://www.youtube.com/watch?v=SeRczvNXyfg"
        />
    </div>
    <div className="m-5" style={{display:"inline-block"}}>
        <ReactPlayer
            url="https://www.youtube.com/watch?v=Vp9NCX2BXc8"
        />
    </div>
    <div className="m-5" style={{display:"inline-block"}}>
        <ReactPlayer
            url="https://www.youtube.com/watch?v=xCqWE7hd8UQ"
        />
    </div>
    </div>
)
}

export default Projects
