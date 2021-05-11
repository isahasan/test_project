import React from 'react'

function SignUp() {
    return (
        <div className="form-container sign-up-container">
            <form action="">
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email or registrstion</span>
                <input type="text" placeholder="Name" name="" id=""/>
                <input type="email" placeholder="Email" name="" id=""/>
                <input type="password" placeholder="PassWord" name="" id=""/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
