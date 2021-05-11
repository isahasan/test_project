import React from 'react'
import './Dashboard/DSBstyle.css'
import Navbar from './Dashboard/Navbar';
import DashboardHeader from './Dashboard/Dashboard_header';
import DashboardHeader2 from './Dashboard/Dashboard_header_2';
import LogIn from "./SignIn_signUp/Login";






function App() {
  return (
    <>  
      <Navbar/>
      <DashboardHeader/>
      <DashboardHeader2/>
      <LogIn/>
    </>            
  );
}

export default App;
