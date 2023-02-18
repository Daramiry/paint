import React from "react"
import { useLocation } from "react-router-dom"
import "../scss/home.css"
import "../main.js"

function Home () {

    
    
    const location = useLocation()
    
    
    return (
        <><div className="homepage">
            <div className="greeting">
                <h1 > Welcome {location.state.id} </h1>
            </div>
        </div><body>
                <canvas id="canvas"></canvas>
                <div className="nav">
                    
                    <div class="clr" data-clr="#000"></div>
                    <div class="clr" data-clr="#EF626C"></div>
                    <div class="clr" data-clr="#fdec03"></div>
                    <div class="clr" data-clr="#24d102"></div>
                    <div class="clr" data-clr="#fff"></div>
                    <button class="clear"> CLEAR </button>
                    <button class="save"> SAVE </button>
                    {/* <script href="../main.js"></script> */}
                </div>
            </body></>
    )
    
}



export default Home