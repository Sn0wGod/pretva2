import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Home() {

    const history = useHistory()
    useEffect(()=>{
        if(!localStorage.getItem("user")){
            history.push('/')
            
        }
        
        
    },[])

    return (
        <div>
            <h1>Welcome you are Logged in</h1>
        </div>
    )
}

export default Home
