import { set } from 'mongoose'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../logo.png'
import './NavBar.css'

function NavBar() {

    const history = useHistory()

  const renderList = ()=>{
      if(localStorage.getItem("user")){
          return (
            
            <li className="nav-item">
              <button 
              className="LoginBtn"
              onClick = {()=>{
                localStorage.clear()
                history.push("/")
              }}
              >Logout</button>
            </li>
           
          )
      }
      else{
        return (
          [<Link to="/">
          <li className="nav-item">
            <button className="LoginBtn">Log in</button>
          </li>
          </Link>,
          <Link to="/register">
            <li className="nav-item">
          <button className="RegisterBtn">Register</button>
          </li>
          </Link>]
        )
      }
  }


    return (
        <div>
          
<nav className="navbar navbar-expand-lg navbar-light">
  <img className="logo" src={Logo} alt="logo"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item">
        <Link className="nav-link navheadlinks roboto" to="#">About Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navheadlinks roboto" to="#">Services</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link navheadlinks roboto" to="#">Search</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link navheadlinks roboto" to="#">Feedback & Support</Link>
      </li>
      
    </ul>
    <br></br>
    <ul className="navbar-nav ml-auto nav-flex-icons">
    
     {renderList()}
    </ul>
  </div>
</nav>
    <div className="belownav"></div>
        </div>
    )
}

export default NavBar
