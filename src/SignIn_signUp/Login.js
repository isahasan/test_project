import React,{useState} from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'

import './style.css'

const LogIn=  ()=> {

    const [active, setActive] = useState(false)

    function signUpHandler (){
        !active &&  setActive(true)
        console.log('clicked up')
    }
    function signIpHandler (){
        active && setActive(false)
        console.log('clicked ip')

    }
    return (
        
    <div className={active? 'container right-panel-active': 'container'} id = "container">
        <SignUp/>

        <SignIn/>

        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login with your parsonal info
                    </p>
                    <button className="ghost" id="signIn" onClick={()=>signIpHandler()} >Sign In</button>
                </div>
                <div className="overlay-panel overlay-rignt">
                    <h1>Hello, Friens!</h1>
                    <p>
                        Enter your parsonal Details and start journey with us
                    </p>
                    <button className="ghost" id="signUp" onClick={()=>signUpHandler()} >Sign Up</button>
                </div>
            </div>
        </div>

    </div>
    )
}

export default LogIn
