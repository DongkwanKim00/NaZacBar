import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import Topbar from '../components/TopBar';
import SignUp from './SignUp';

const Login = () =>{
    const baseUrl = "http://localhost:8084";
    const [inputMail, setInputMail] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [showSignUp, setShowSignUp] = useState(false);

    const handleInputMail = (e) => {
        setInputMail(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (user) {
            setLoggedInUser(user);
        }
    }, []);

    async function onClickLogin(){
        const response = await axios.get(`${baseUrl}/api/user/${inputMail}`);
        const user = response.data;
            
        if(user.password !== inputPw){
            console.log("NO")
            alert("find not user information")
        } else {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            setLoggedInUser(user);
            console.log("user logged in: ", user);
            alert("login")
        }
    }

    function onClickSignUp() {
        setShowSignUp(true);
    }
      
    function onCloseSignUp() {
        setShowSignUp(false);
    }

    // 로그인이 되어있을 때에만 사용자 정보화면을 렌더링합니다.
    if (loggedInUser) {
        return (
            <div>
                <Topbar log_name={`user: ${loggedInUser.name}`} />
                <h1>Welcome {loggedInUser.name}!</h1>
                <button onClick={() => setLoggedInUser(null)}>Logout</button>
            </div>
        );
    }

    // 로그인이 되어있지 않은 경우에는 로그인 화면을 렌더링합니다.
    return(
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}>
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
    );
}
 
export default Login;