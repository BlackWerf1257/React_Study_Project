import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // 페이지 이동용
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage'


function App() {
  //CSS
  //justify-content: center : 컴포넌트를 정렬할 위치
 const topStyle = {
    backgroundColor: '#D7FFF0',
    border: 'solid',
    height: '80px',
    display: 'flex',
    position: 'relative',
    alignItems: 'center', // 세로 중앙 정렬
    justifyContent: 'center', // 가로 중앙 정렬

    fontSize: '30px'
 }
 const btnStyle = {
  padding: '20px 20px',
  backgroundColor: '#FFFFFF',
  marginLeft: 'auto',
  marginRight: '60px',
  fontSize: '12px',
  minWidth: '100px', // 버튼의 최소 너비 설정 (필요에 따라 조정)
 }

 const LoggedtextStyle = {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    width: '100%',
    fontSize: '40px',
    marginLeft: '200px',
 }
 const LogOutedtextStyle = {
  display: 'flex',
  position: 'relative',
  alignItems: 'center', 
  justifyContent: 'center',
  width: '100%',
  fontSize: '40px',
  marginLeft: '360px',
}
 const userNameTextStyle = {
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'center',
  width: '100%',
  position: 'relative',
  top: '20px',
  fontSize: '20px',
}

 //회원가입
 const register = () => {
  alert('회원가입');
 };
 //로그인
 function login() {
  navigate('/login')
}
  //로그아웃
  const logout = () => {
    alert('로그아웃');
    SetIsLogged(false);
   };
  


 //로그인 데이터
 const [userName, SetUserName] = useState('');
 const [isLogged, SetIsLogged] = useState(false);

const navigate = useNavigate();
  
  return (
    <div>
      <div style={topStyle}>
        {
          !isLogged ? 
          <> 
                  <span style={LogOutedtextStyle}> React 공부용 사이트 </span>
                  <button style={btnStyle} onClick={login}> 로그인</button>
                  <button style={btnStyle} onClick={register}> 회원가입</button>
          </> 
          :
          <>    
            <span style={LoggedtextStyle}> React 공부용 사이트 </span>
            <button style={btnStyle} onClick={logout}> 로그아웃</button>
          </>     
        }

 
   
      </div>

      <div>
          { isLogged ? <span style={userNameTextStyle}> `{userName}님 안녕하세요` </span> : <span style={userNameTextStyle}> 로그인을 해주세요 </span> }
      </div>

      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/login" element={<LoginPage />} /> {/* /login 경로에서 LoginPage 컴포넌트를 렌더링 */}
      </Routes>
    </div>
  );
}

export default App;
