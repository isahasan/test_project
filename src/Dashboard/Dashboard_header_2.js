import React from 'react'
import PublishedPost from './Published_post'
import Usersection from './Usersection'
function Dashboard_header() {
    const values = 
        {
            name:'Isa Hasan',
            email: 'esahasan42@gmail.com',
            address:'Sonargaon, Narayangonj, Dhaka',
            birthday:'1994-10-20',
            gender: 'Male'
        }
    
    return (
        <>
            <div className= "container" style={{display :'blocl'}} >
                <div className="header">
                        <div className="headerleft">
                            DashBoard
                        </div>
                        <div className="headerright">
                            Your Profile
                        </div>
                        {/* <!-- <button>Save</button> --> */}
                </div>

                <div className="bodysection">
                    <div className="sidebar">
                        <ul>
                            <li className="active"><a href="/">My Post</a></li>
                            <li><a href="/">upload Post</a></li>
                            <li><a href="/">User</a></li>
                            <li><a href="/">Searvices</a></li>
                            <li><a href="/">LogOut</a></li>
                        </ul>
                    </div>
                    <div className="mainsec">
                        <div className="Dashboard_body"></div>
                        <div className="usersection" style={{display:'none'}}>
                            <Usersection values ={values} />
                        </div>
                        
                        <div className="publishedsection" style={{display:'block'}} >
                            <PublishedPost/>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Dashboard_header
