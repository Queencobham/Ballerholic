import React from 'react'
import logo from '../../assets/images/logo.png'
import './entry.css'

const Login = () => {
    return (
        <div className='login'>
            <nav>
                <img src={logo} alt="Ballerholic" />
            </nav>
            <div className="login-form">
                <form>
                    <h2>login</h2>
                    <div className="input-box">
                        <span>email</span>
                        <input type="text" placeholder='Input email' required />
                    </div>
                    <div className="input-box">
                        <span>password</span>
                        <input type="text" placeholder='Input password' required />
                    </div>
                    <div className="input-box">
                      <input type="submit" value="login" className="signup" />
                    </div>
                    <p>don't have an account? <a href="#">sign up</a></p>
                </form>
                <p>copyright @ballerholic2023</p>
            </div>
        </div>
    )
}

export default Login
