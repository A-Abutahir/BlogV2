import { useState } from "react"
import axios from 'axios';

function Login() {
    const [isSignup, setisSignup] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password:""
    })

    const changeEvent = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const result = sendRequest();
        console.log(result)
    }

    const sendRequest = async () => {
        const response = await axios.post("http://localhost:5000/api/user/signup", {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password
        })
        .catch((err) => {
            console.log(err);
        });
        console.log(response.data)
        const data = await response.data;
        return data;

    }

    
    return (
        <div className="login-container">
            <form onSubmit={submitHandler}>
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>
                {isSignup && 
                    <div className="form-group">
                        <label>Name:</label>
                        <input name="name" value={inputs.name} onChange={changeEvent} type="text" className="form-control" />
                    </div>
                }
                <div className="form-group">
                    <label>Email address:</label>
                    <input name="email" value={inputs.email}  onChange={changeEvent} type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input name="password" value={inputs.password}  onChange={changeEvent} type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
                <a className="pull-right" onClick={() => setisSignup(!isSignup)} >
                    Go to {!isSignup ? "Sign Up" : "Login"} Page
                </a>
            </form>
        </div>
    )
}

export default Login