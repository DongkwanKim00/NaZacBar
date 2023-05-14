import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import Topbar from '../components/TopBar';
import SignUp from './SignUp';

const Login = () =>{
    const baseUrl = "http://localhost:8084";
    const [inputMail, setInputMail] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [user, setUser] = useState([]);

    const [showSignUp, setShowSignUp] = useState(false);

    const handleInputMail = (e) => {
        setInputMail(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    async function onClickLogin(){
        axios.get(`${baseUrl}/api/user/${inputMail}`).then((response) => setUser(response.data))
        
        if(user.password!==inputPw){
            console.log("NO")
            alert("find not user information")
        }else {
            Topbar.log_name="user : "+user.name
            console.log(Topbar.log_name)
            alert("login")
        }
    }

    function onClickSignUp() {
        setShowSignUp(true);
    }

    function onCloseSignUp() {
        setShowSignUp(false);
    }

    return(
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'
            }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
            >
                <label>Email</label>
                <input type='email' value={inputMail} onChange={handleInputMail} placeholder="ID"/>
                <label>Password</label>
                <input type='password' value={inputPw} onChange={handleInputPw} placeholder="Password"/>
                <br />
                <button type='button' onClick={onClickLogin}>Login</button>
                <button type='button' onClick={onClickSignUp}>Sign Up</button>
            </form>
            {showSignUp && <SignUp onClose={onCloseSignUp} />}
        </div>
    )
}
 
export default Login;