import Link from 'next/link';
import axios from 'axios'
import { useState } from 'react';
const SignUpPage = () => {

    // const history=useNavigate();
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
                        alert("User already exists")

                    }
                    else if (res.data = "notexist") {
                        history("/", { state: { id: email } })
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
        <div className="login">
            <h1>Sign Up</h1>
            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" name="" id=""></input>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" name="" id=""></input>

                <input type="submit" onClick={submit} />
            </form>

            <br></br>
            <p>Or</p>
            <br></br>

            <Link href="/login" passHref>
                <h1>Login page</h1>
            </Link>
        </div>
    )
}

export default SignUpPage