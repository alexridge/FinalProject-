import './SignUpForm.css'
import React, { useState } from 'react'

const SignUpForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input placeholder='Email' type="email" value={email} onChange={handleEmailChange}></input>
            <label>Password</label>
            <input placeholder="Password" type="password" value={password} onChange={handlePasswordChange}></input>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default SignUpForm;