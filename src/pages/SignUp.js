import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({ onClose }) => {
  const [name, setName] = useState('');
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const baseUrl = "http://localhost:8084";
  const buttonStyle = {
    // 다른 스타일 속성들...
    borderRadius: '5px',
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(age, mail, name, password);
    axios.post(`${baseUrl}/api/user`, {
      age: age,
      mail: mail,
      name: name,
      password: password
    })
      .then((response) => {
        console.log(response.data);
        alert('회원가입이 완료되었습니다.');
        onClose(); // onClose 호출하여 회원가입 창 닫기
      })
      .catch((error) => {
        console.log(error);
        alert('회원가입에 실패하였습니다.');
      });
  };

  const signUpContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const signUpFormStyle = {
    backgroundColor: '#000',
    color: '#fff',
    width: 300,
    padding: 20,
  };

  return (
    <div style={{ ...signUpContainerStyle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ ...signUpFormStyle, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
      <button type="button" onClick={onClose} style={{ ...buttonStyle, color: '#fff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold', alignSelf: 'flex-end' }}>X</button>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block' }}>이름:</label>
            <input type="text" value={name} onChange={handleNameChange} required style={{ color: '#000' }} />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block' }}>이메일:</label>
            <input type="email" value={mail} onChange={handleEmailChange} required style={{ color: '#000' }} />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block' }}>비밀번호:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required style={{ color: '#000' }} />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block' }}>나이:</label>
            <input type="number" value={age} onChange={handleAgeChange} required style={{ color: '#000' }} />
          </div>
          <button type="submit" style={{ ...buttonStyle, color: '#fff' }}>회원가입</button>
          
        </form>
      </div>
    </div>


  );
};

export default SignUp;