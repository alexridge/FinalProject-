import {useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
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

        let response = await fetch('/tokens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            "body": JSON.stringify({email, password})
        })

        if (email === '' || password === ''){
            console.log('empty field')
            // navigate('/login')            
          } else if (response.status !== 201) {
            console.log("oop")
            // navigate('/login')            
          } else{
            console.log("yay")
            let data = await response.json()
            window.localStorage.setItem("token", data.token)
            window.localStorage.setItem("user_id", data.user_id)
            // navigate('/posts');
          }
        
        
    }

    return (
        <div id="main-container">
            <Navbar />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" value={email} onChange={handleEmailChange}></input>
                <label>Password</label>
                <input type="password" value={password} onChange={handlePasswordChange}></input>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
};

export default LoginPage;