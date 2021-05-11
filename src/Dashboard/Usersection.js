import React from 'react'
import img1 from './img1.png'
function Usersection({values}) {
    const {name, email, address ,birthday,gender} = values
    return (
        <>
            <div className="main_header">
                                    <div className="main_header_content">
                                        <img src={img1} alt=""/>
                                            <div className="username">UserName</div>
                                            <div className="tag_line">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                            <button>Edit Profile</button>
                                    </div>
                                    
                            </div>
                            <div className="main_body">
                                <div className="personal_info_field">
                                <h1>Personal Info</h1>
                                    <h2>User Name: </h2>
                                    <input type="text" value={name}readOnly name="" id=""/>

                                    <h2>Email: </h2>
                                    <input type="email" value={email} readOnly name="" id=""/>

                                    <h2>Birth day: </h2>
                                    <input type="text" value={birthday} readOnly name="" id=""/>

                                    <h2>Gender: </h2>
                                    <input type="text" value={gender} readOnly name="" id=""/>

                                    <h2>Address: </h2>
                                    <input type="text" value={address} readOnly name="" id=""/>
                                    <div className="update_btn">
                                        <button>Update</button>

                                    </div>

                                </div>

                            </div>
        </>
    )
}

export default Usersection
