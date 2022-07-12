import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css';
import { auth } from '../Firebase';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleregisteration = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                if (auth) {
                    navigate('/login', { replace: true });
                }
            })
            .catch(error => alert(error.message))

        // do some fancy firebase registration shitt.........
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img src="" alt="" className="login__logo" />

            </Link>
            <div className="login__container">
                <h1>Sign-Up</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
                
                </form>
                <p>New To NewsCafe? Create New Account</p>
                <button onClick={handleregisteration} className='login__registerButton'>Create Your NewsCafe Account</button>

            </div>
        </div>
    )
}

export default Login