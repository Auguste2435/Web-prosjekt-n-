import Link from 'next/link';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { cartPage } from '../src/components/home/cart-page';

const LoginPage = () => {

    // const history=useNavigate('');

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/signup", {
                email, password
            })
                .then(res => {
                    if (res.data = "exist") {
                        history("/", { state: { id: email } })
                    }
                    else if (res.data = "notexist") {
                        alert("User have not sign up")
                    }
                })

                .catch(e => {
                    alert("wrong details")
                    console.log(e)
                })
        }

        catch (e) {
            console.log(e)
        }

    }
    return (
        <div className="signUp">
            <h1>Login</h1>
            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" name="" id=""></input>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" name="" id=""></input>

                <input type="submit" onClick={submit} />
            </form>

            <br></br>
            <p>Or</p>
            <br></br>

            <Link href="/signup" passHref>
                <h1>Sign up page</h1>
            </Link>

        </div>
    )
}

export default LoginPage