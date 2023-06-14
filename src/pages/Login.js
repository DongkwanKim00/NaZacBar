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

  // Event handlers for input fields
  const handleInputMail = (e) => {
    setInputMail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // Check if the user is already logged in using local storage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  // Function to handle login button click
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

  // Function to handle sign up button click
  function onClickSignUp() {
    setShowSignUp(true);
  }

  // Function to close the sign-up form
  function onCloseSignUp() {
    setShowSignUp(false);
  }

  // Function to handle logout
  function handleLogout() {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    window.location.reload(); // Refresh the page after logout
  }

  // Render the user information screen only if the user is logged in
  if (loggedInUser) {
    return (
      <div style={{ background: "url('/backImage.png') no-repeat center center fixed", WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', minHeight: '100vh', padding: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50vw', height: '50vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', margin: 'auto', borderRadius: '10px', marginTop: '2cm' }}>
          <Topbar log_name={`user: ${loggedInUser.name}`} />
          <div style={{ textAlign: 'center', color: '#fff', fontSize: '55px' }}>
            <p style={{ margin: '20px 0' }}>Welcome, {loggedInUser.name}!</p>
            <button onClick={handleLogout} style={{ color: '#fff', backgroundColor: 'transparent', border: '2px solid #fff', borderRadius: '4px', padding: '10px 20px', fontSize: '30px', cursor: 'pointer' }}>Logout</button>
          </div>
        </div>
      </div>
    );
  }

  // Styles for login container and input fields
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
    <div style={{ background: "url('/backImage.png') no-repeat center center fixed", WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', minHeight: '100vh', padding: '50px' }}>
      <div>
        <Topbar log_name={loggedInUser ? `user: ${loggedInUser.name}` : ''} />
        {loggedInUser ? (
          <div style={loginContainerStyle}>
          </div>
        ) : (
          <div style={{ ...loginContainerStyle, marginTop: '-3cm' }}>
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
    </div>
  );
};

export default Login;
