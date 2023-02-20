import React from "react"
import { useLocation } from "react-router-dom"
import "../scss/SassHome/home.css"
import runJs from "../main.js"



function Home () {

    
    
    const location = useLocation()
    
    
    return (
        
            <><div className="homepage">
            <div className="greeting">
                <h1> Welcome, {location.state.id} </h1>
            </div>

        </div>
        
                <canvas onLoad={runJs} id="canvas"></canvas>
                <div className="nav">
                    <div className="clr" data-clr="#000"></div>
                    <div className="clr" data-clr="#EF626C"></div>
                    <div className="clr" data-clr="#fdec03"></div>
                    <div className="clr" data-clr="#24d102"></div>
                    <div className="clr" data-clr="#fff"></div>
                    <button className="clear"> CLEAR </button>
                    <button className="save"> SAVE </button>
                </div>
                <script ></script>
            </>
    )
    
}



export default Home