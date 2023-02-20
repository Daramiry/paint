import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "../scss/SassLogin/Login.css"

function Login() {

    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try{
            await axios.post("http://localhost:3000/Login",{
                email, password
            })
            .then(res => {
                if(res.data === "exist"){
                    history("/home", {state:{id:email}})
                }
                else if (res.data === "notexist") {
                    alert("User is not signed up")
                }

            })
            .catch(e => {
                alert("wrong details")
                console.log(e)
            })
        }
        catch(e) {
            console.log(e)
        }
    }

    return(
        <div className="login">
            <h1>Login</h1>

            <form action="POST">
                <input className="email" type="text" onChange = {(e) => { setEmail(e.target.value)}} placeholder="Email"  />
                <input className="password" type="text" onChange = {(e) => { setPassword(e.target.value)}} placeholder="Password"  />

                <input className="submit"type="submit" onClick={submit}/>

            </form>

            <br />
            <p className="break">OR</p>
            <br/>

            <Link className="link" to="/Signup">Sign up Here</Link>
            <br/>
            <Link className="link" to="/Home">Paint now</Link>
        </div>
    )
}

export default Login