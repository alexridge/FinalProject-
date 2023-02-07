import {useState} from 'react';
import Navbar from '../../components/navbar/navbar';
import './LoginPage.css'

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleEmailChange = (e)=> {
        setEmail(e.target.value)
    };

    const handlePasswordChange = (e)=> {
        setPassword(e.target.value)
    };

    const handleSubmit = async(e)=> {
        e.preventDefault();

        fetch('/tokens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            "body": JSON.stringify({email, password})
        })
        .then(response => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });

    }

    return (
        <div id="main-container">
            <Navbar />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type={email} value={email} onChange={handleEmailChange}></input>
                <label>Password</label>
                <input type={password} value={password} onChange={handlePasswordChange}></input>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
};

export default LoginPage;
