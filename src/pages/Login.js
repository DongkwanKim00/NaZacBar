import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Topbar from '../components/TopBar';
import SignUp from './SignUp';

const Login = () => {
  const baseUrl = "http://localhost:8084";
  const [inputMail, setInputMail] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleInputMail = (e) => {
    setInputMail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  async function onClickLogin() {
    const response = await axios.get(`${baseUrl}/api/user/${inputMail}`);
    const user = response.data;

    if (user.password !== inputPw) {
      console.log("NO");
      alert("find not user information");
    } else {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      setLoggedInUser(user);
      console.log("user logged in: ", user);
      alert("login");
      window.location.reload(); // Refresh the page after login
    }
  }

  function onClickSignUp() {
    setShowSignUp(true);
  }

  function onCloseSignUp() {
    setShowSignUp(false);
  }

  function handleLogout() {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    window.location.reload(); // Refresh the page after logout
  }

  // 로그인이 되어있을 때에만 사용자 정보화면을 렌더링합니다.
  if (loggedInUser) {
    return (
      <div style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',}}>
        <Topbar log_name={`user: ${loggedInUser.name}`} />
        <h1>Welcome {loggedInUser.name}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  const loginContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    
  };

  const loginBoxStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    color: '#fff',
    borderRadius: '4px',
  };

  const inputStyle = {
    color: '#fff',
    fontSize: '18px',
    marginBottom: '10px',
  };
  const inputStyle2 = {
    fontSize: '18px',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '16px',
    padding: '8px 16px',
    borderRadius: '4px',
    marginBottom: '10px',
  };

  return (
    <div>
      <Topbar log_name={loggedInUser ? `user: ${loggedInUser.name}` : ''} />
      {loggedInUser ? (
        <div style={loginContainerStyle}>
          <h1>Welcome {loggedInUser.name}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>  ) : (
    <div style={loginContainerStyle}>
      <form style={loginBoxStyle}>
        <label style={inputStyle}>Email</label>
        <input type="email" value={inputMail} onChange={handleInputMail} placeholder="ID" style={inputStyle2}/>
        
        {" "}
        <label style={inputStyle}>Password</label>
        <input type="password" value={inputPw} onChange={handleInputPw} placeholder="Password" style={inputStyle2} />
        <br />
        <button type="button" onClick={onClickLogin} style={buttonStyle}>
          Login
        </button>
        <button type="button" onClick={onClickSignUp} style={buttonStyle}>
          Sign Up
        </button>
      </form>
      {showSignUp && <SignUp onClose={onCloseSignUp} />}
    </div>
  )}
</div>
);
};

export default Login;
