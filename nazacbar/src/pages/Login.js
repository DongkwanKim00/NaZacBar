import React, { useState, useEffect } from 'react';
import axios from 'axios';

 
const Login = () =>{
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login',inputId,inputPw)
    }
    /*
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])
    */
    return(
        <form style={{ marginTop: '80px' }}>
 
        <div>
            <h1>Login</h1>
            <div>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} placeholder="ID"/>
            </div>
            <div>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} placeholder="Password"/>
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
        </form>
    )
}
 
export default Login;