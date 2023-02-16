import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

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
                if(res.data == "exist"){
                    alert("user already exist")
                }
                else if (res.data == "notexist") {
                
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
                <input type="text" onChange = {(e) => { setEmail(e.target.value)}} placeholder="Email" name="" id="" />
                <input type="text" onChange = {(e) => { setPassword(e.target.value)}} placeholder="Password" name="" id="" />

                <input type="submit" onClick={submit}/>

            </form>

            <br />
            <p>OR</p>
            <br/>

            <Link to="/">Login Here</Link>
        </div>
    )
}

    export default Signup