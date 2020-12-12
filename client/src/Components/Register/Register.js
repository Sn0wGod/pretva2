import React, { useState } from 'react'
import { CountryDropdown } from 'react-country-region-selector'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory } from 'react-router-dom'
import comp from '../computer.png'
import './Register.css'

function Register() {

    const history = useHistory()
    const [fName,setfName] = useState("")
    const [lName,setlName] = useState("")
    const [dealer,setdealer] = useState("")
    const [companyName,setcompanyName] = useState("")
    const [country,setcountry] = useState("")
    const [contactNumber,setcontactNumber] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [showpassword,setshowpassword] = useState(false)

    const postRegister = ()=>{
        //http://localhost:5000
        fetch("/register",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                firstName:fName,
                lastName:lName,
                dealer,
                companyName,
                country,
                contactNumber,
                email,
                password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                toast.error(data.error)
            }
            else{
                toast.success("Registered Successfully, Please login again")
                setTimeout(()=>{
                    history.push('/')
                },3000)
                
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return (
        <div>
            <br></br>
            <ToastContainer toastClassName="toastmessage" autoClose={2000} />
            <div className="text-center">
                <Link to="/"><button className="LoginBtn3">Log in</button></Link>
               <Link to="/register"><button className="RegisterBtn3">Register</button></Link>
                
            </div>
            <br></br>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img className="computerimg" src={comp} alt="computer" />
                    </div>
                    <div className="col-md-6">
                        <div >
                            <div className="container registercard text-center p-5"> 
                                <p className="h4 mb-4 memberlogin roboto">New User Registration</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="sidebar">

                                                </span>
                                            </div>
                                            <input
                                             type="text" 
                                             value={fName}
                                             onChange={(e)=>setfName(e.target.value)}
                                             className="form-control registerinput py-0" 
                                             id="inlineFormInputGroup1" 
                                             placeholder="First Name *"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="sidebar">

                                                </span>
                                            </div>
                                            <input 
                                            type="text" 
                                            value={lName}
                                            onChange={(e)=>setlName(e.target.value)}
                                            className="form-control registerinput py-0" id="inlineFormInputGroup2" placeholder="Last Name *"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="sidebar">

                                                </span>
                                            </div>
                                            <select className="browser-default registerinput custom-select" value={dealer} onChange={(e)=>setdealer(e.target.value)}>
                                                <option defaultValue>Buyer or Supplier? *</option>
                                                <option value="Buyer">Buyer</option>
                                                <option value="Supplier">Supplier</option>
                                            </select>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="sidebar">

                                                </span>
                                            </div>
                                            <input
                                            type="text"
                                            value={companyName}
                                            onChange={(e)=>setcompanyName(e.target.value)}
                                            className="form-control registerinput py-0" id="inlineFormInputGroup3" placeholder="Company Name *"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="sidebar">

                                                </span>
                                                <CountryDropdown 
                                                    className="country"
                                                    value={country}
                                                    onChange={(e) => setcountry(e)} 
                                                />  
                                            </div>
                                              
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="sidebar">

                                                </span>
                                                
                                            </div>
                                            <input 
                                            type="number" 
                                            value={contactNumber}
                                            onChange={(e)=>setcontactNumber(e.target.value)}
                                            className="form-control registerinput py-0" id="inlineFormInputGroup4" placeholder="Contact Number *"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="sidebar">

                                                </span>
                                            </div>
                                            <input 
                                            type="email" 
                                            value={email}
                                            onChange={(e)=>setemail(e.target.value)}
                                            className="form-control registerinput py-0" id="inlineFormInputGroup5" placeholder="Email Address *"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="sidebar">
                                                
                                                </span>
                                            </div>
                                            <input 
                                            type={showpassword?"text":"password"} 
                                            value={password}
                                            onChange={(e)=>setpassword(e.target.value)}
                                            className="form-control registerinput2 py-0" id="inlineFormInputGroup6" placeholder="Choose Password *"/>
                                            <div className="input-group-prepend">
                                                <span className="view2">
                                                    <span onClick={()=>setshowpassword(!showpassword)}>View</span>   
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div>
                                    <button className="text-center loginformBtn" onClick={()=>postRegister()}>Register</button>
                                </div>
                               
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
