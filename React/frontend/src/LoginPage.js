import React, { useState } from 'react';

function LoginPage() {
  const itemBar = {
    backgroundColor: '#FFEBD5',
    border: 'solid',
    width: '600px',
    height: '800px',
    display: 'flex',
    alignItems: 'center', // 세로 중앙 정렬
    justifyContent: 'center', // 가로 중앙 정렬
    flexDirection: 'column', // 세로로 정렬
    fontSize: '30px',
    position: 'absolute',
    top: '50%', // 화면 중앙
    left: '50%',
    transform: 'translate(-50%, -50%)', // 정확하게 중앙 배치
  }

 const itemContainer = {  
  display: 'flex',
  width: 'auto',
  height: 'auto',
  justifyContent: 'flex-start', // 기본적으로 왼쪽 정렬
  marginBottom: '20px', // 아이템 간격
  width: '100%', // 부모 컨테이너에 대해 100% 너비 설정
 }
 const spanStyle = {
  marginLeft: '30px', // 오른쪽 정렬을 위해 자동 여백을 설정
  marginRight: '0px', // 오른쪽 여백을 0으로 설정
  fontSize: '30px'
 }
 const inputStyle = {
  marginLeft: 'auto', // 오른쪽 정렬을 위해 자동 여백을 설정
  marginRight: '30px', // 오른쪽 여백을 0으로 설정
  width: '300px', // 고정된 너비

 }
 const btnStyle = {
  display: 'flex',
  position: 'relative',
  top: '60px',
  width: '200px',
  justifyContent: 'center', // 가로 중앙 정렬
  backgroundColor: '#FFFFFF',
  fontSize: '25px'
 }

 const [id, SetId] = useState('');
 const [pwd, SetPwd] = useState('');

 const [data, SetData] = useState('');

 const handleLogin = () => {
  // fetch 요청 시 id와 password 상태값을 URL에 포함시킴
  fetch(`http://localhost:8080/api/login?id=${id}&pwd=${pwd}`, { method: 'POST',})
    .then((response) => response.text())
    .then((data) => {SetData(data)
      alert(data);
    })
    .catch((error) => console.error('Error:', error));
}

  return (
    <div style={itemBar}>
      <div style={itemContainer}>
        <span style={spanStyle}> ID</span>
        <input style={inputStyle} onChange={val => SetId(val.target.value)}/>
      </div>
      <div style={itemContainer}>
        <span style={spanStyle}> 비밀번호</span>
        <input style={inputStyle} onChange={val => SetPwd(val.target.value)}/>
      </div>
      <button style={btnStyle} onClick={handleLogin}> 로그인</button>
    </div>
  );
}

export default LoginPage;