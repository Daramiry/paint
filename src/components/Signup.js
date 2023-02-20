import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
// import "../scss/SassSignup/Signup.css"

function Signup() {

    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try{
            await axios.post("http://localhost:3000/signup",{
                email, password
            })
            .then(res => {
                if(res.data === "exist"){
                    alert("user already exist")
                }
                else if (res.data === "notexist") {
                
                     history("/home", {state:{id:email}})
                }

            })
            .catch( e => {
                alert("wrong details")
                console.log(e)
            })
        }
        catch(e) {
            console.log(e)
        }
    }

    return(
        <div className="Signup">
            <h1>Sign Up</h1>

            <form action="POST">
                <input className="email" type="text" onChange = {(e) => { setEmail(e.target.value)}} placeholder="Email" name="" id="" />
                {/* <br/> */}
                <input className="password" type="text" onChange = {(e) => { setPassword(e.target.value)}} placeholder="Password" name="" id="" />
                {/* <br/> */}
                <input className="submit" type="submit" onClick={submit}/>

            </form>

            <br />
            <p className="break">OR</p>
            <br/>

            <Link className="link" to="/">Login Here</Link>

            <br/>

            {/* <Link className="paint-now" to="/Home">Paint now</Link> */}
        </div>
    )
}

    export default Signup