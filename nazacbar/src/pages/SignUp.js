import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({ onClose }) => { // onClose props 추가
  const [name, setName] = useState('');
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const baseUrl = "http://localhost:8084";

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
    console.log(age, mail, name, password)
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

  return (
    <div style={{ 
      display: 'flex', justifyContent: 'center', alignItems: 'center', 
      width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }}>
      <div style={{ backgroundColor: '#fff', width: 300, padding: 20 }}>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block' }}>이름:</label>
            <input type="text" value={name} onChange={handleNameChange} required />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block' }}>이메일:</label>
            <input type="email" value={mail} onChange={handleEmailChange} required />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block' }}>비밀번호:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block' }}>나이:</label>
            <input type="number" value={age} onChange={handleAgeChange} required />
          </div>
          <button type="submit">회원가입</button>
          <button type="button" onClick={onClose}>취소</button> {/* onClose 호출하여 회원가입 창 닫기 */}
        </form>
      </div>
    </div>
  );
};

export default SignUp;