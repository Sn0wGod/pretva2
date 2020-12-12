import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import comp from '../computer.png'
import './Login.css'

function Login() {

    const history = useHistory()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [showPassword,setshowPassword] = useState(false)

    const postLogin = ()=>{
        //http://localhost:5000
        fetch("/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
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
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                toast.success("Login Successfully")
                history.push('/home')
            }
        })
    }

    return (
        <div>
            <br></br>
            <ToastContainer toastClassName="toastmessage" autoClose={2000} />
            <div className="text-center">
                <Link to="/"><button className="LoginBtn2">Log in</button></Link>
                <Link to="/register"><button className="RegisterBtn2">Register</button></Link>
            </div>
            <br></br>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img className="computerimg" src={comp} alt="computer" />
                    </div>
                    <div className="col-md-6">
                        <div >
                            <div className="card container logincard text-center p-5"> 
                            <p className="h4 mb-4 memberlogin roboto">Member Login</p>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span>
                                        <img className="loginemail" alt="loginemail" src="data:image/png;base64,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" />
                                    </span>
                                </div>
                                <input 
                                type="email" 
                                value = {email}
                                onChange = {(e)=>setEmail(e.target.value)}
                                className="form-control logininput py-0" id="inlineFormInputGroup12" placeholder="Registered Email ID"/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span>
                                        <img className="loginemail" alt="loginemail" src="data:image/png;base64,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" /> 
                                    </span>
                                </div>
                                <input 
                                type={showPassword?"text":"password"} 
                                value={password}
                                onChange = {(e)=>setPassword(e.target.value)}
                                className="form-control logininput2 py-0" id="inlineFormInputGroup13" placeholder="Password"/>
                                <div className="input-group-prepend">
                                    <span className="view">
                                        <span onClick={()=>setshowPassword(!showPassword)}>View</span>   
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className="text-center loginformBtn" onClick={()=>postLogin()}>Login</button>
                            </div>
                            <br></br>
                            <div className="row rememberrow">
                                <div className="col-md-6">
                                    <div><input type="checkbox" /><span className="ml-2">Remember me</span></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="forgotpass">Forgot Password ?</div>
                                </div>
                                
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <br></br><br></br> */}
        </div>
    )
}

export default Login