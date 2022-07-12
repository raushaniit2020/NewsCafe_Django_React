import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css';
import { auth } from '../Firebase';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // do some fancy firebase login shitt.........
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate('/', { replace: true });
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();
        navigate('/signup', { replace: true })
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img src="" alt="" className="login__logo" />

            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
                    <button onClick={signIn} className='login__signinButton' type="submit">Sign In</button>
                </form>
                <p>New To NewsCafe? Create New Account</p>
                <button onClick={register} className='login__registerButton'>Create Your NewsCafe Account</button>

            </div>
        </div>
    )
}

export default Login