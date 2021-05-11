import React from 'react'
import logo from './ISA.png'
function Navbar() {
    return (
    <div className= "container" style={{display :'inline'}} >
        <header className="nav_header" >
            <img className="logo" src={logo} alt=""/>
            <nav>
                <ul className="nav_link" >
                    <li><a href="/">Home</a></li>
                    <li><a href="/">posts</a></li>
                    <li><a href="/">Dashboard</a></li>
                </ul>
            </nav>
            <a href="/"><button>Sign in</button></a>
        </header>
    </div>
    )
}

export default Navbar
