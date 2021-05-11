import React from 'react'

function Signin() {
    return (
        <div className="form-container sign-in-container">
            <form action="">
                <h1>Sign In</h1>
                <div className="social-container">
                    <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" name="" id=""/>
                <input type="password" placeholder="PassWord" name="" id=""/>
                <a href="/"> Forget your password</a>
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Signin
