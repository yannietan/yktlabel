const Footer = () => {

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
        <footer>
                <h2 style={black}><b>YKT LABEL</b></h2>
                <h5 style={blackmini}>Copyright 2020. All rights reserved.</h5>
                <a href="https://www.youtube.com/channel/UCpLUqZQvFbkQ5lz92EG5htQ" class="fa fa-youtube"></a>
                <a href="https://www.instagram.com/yktlabel/?hl=en" class="fa fa-instagram"></a>
                <a href="https://www.facebook.com/ykt.label" class="fa fa-facebook"></a>
                <br></br>
                <br></br>

        </footer>
        </div>
    )
}

export default Footer