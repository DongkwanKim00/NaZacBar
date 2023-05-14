import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
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
    })
    .catch((error) => {
      console.log(error);
      alert('회원가입에 실패하였습니다.');
    });
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름:</label>
          <input type="text" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label>이메일:</label>
          <input type="email" value={mail} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>비밀번호:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div>
          <label>나이:</label>
          <input type="number" value={age} onChange={handleAgeChange} required />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;