import React from 'react'
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import "./entry.css"

const Register = () => {
    return (
        <div className='register'>
            <nav>
              <Link to="/"><img src={logo} alt="Ballerholic" /></Link>
            </nav>
            <div className="register-form">
                <form>
                    <h2>create account</h2>
                    <div className="input-box">
                        <span>organisation</span>
                        <input type="text" placeholder='Input text' required />
                    </div>
                    <div className="input-box">
                        <span>email</span>
                        <input type="text" placeholder='Input email' required />
                    </div>
                    <div className="input-box">
                        <span>password</span>
                        <input type="text" placeholder='Input password' required />
                    </div>
                    <div className="input-box">
                        <span>confirm password</span>
                        <input type="text" placeholder='Confirm password' required />
                    </div>
                    <div className="input-box">
                      <input type="submit" value="sign in" className="signin" />
                    </div>
                    <p>already have an account?<Link to="/login">sign in</Link></p>
                </form>
                <p>copyright @ballerholic2023</p>
            </div>
        </div>
    )
}

export default Register
