import { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // 페이지 이동용
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import { useLocation } from 'react-router-dom';


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
  }
 const btnStyle = {
  padding: '20px 20px',
  backgroundColor: '#FFFFFF',
  fontSize: '12px',
  marginLeft: 'auto',
  marginRight: '60px',
  width: 'auto',
  display: 'inline-block', // 버튼 크기를 텍스트에 맞게 조정
  flexShrink: 0, // 자식 박스의 다음줄로 넘어가는것 방지
  };


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
  justifyContent: 'top',
  width: '100%',
  position: 'relative',
  top: '20px',
  fontSize: '20px',
}


const PostContrainerStyle = {
  backgroundColor: '#FFFFFF',
  border: 'solid',
  height: 'auto',
  display: 'flex',
  marginTop: '100px',
  position: 'relative',
  alignItems: 'start', // 가로 중앙 정렬
  justifyContent: 'start', // 세로 중앙 정렬
  flexDirection: 'column', // 세로로 정렬
  borderWidth: 'thin',
  minHeight: 'calc(100vh - 215px)', // 최소 높이(100vh: 부모태그의 길이의 100%)
}
const PostPreviewContrainerStyle = {
  backgroundColor: '#FFFFFF',
  border: 'solid',
  width: '80%',
  height: '10%',
  display: 'flex',
  marginBottom: '10px',
  position: 'relative',
  alignItems: 'center', // 세로 중앙 정렬
  justifyContent: 'center', // 가로 중앙 정렬
  borderWidth: 'thin'
}

 //회원가입
 const register = () => {
  navigate('/register')
 };
 //로그인
 const login = () => {
  navigate('/login')
}
  //로그아웃
  const logout = () => {
    alert('로그아웃되었습니다');
    SetIsLogged(false);
    SetUserName('');
   };

   const [postInfo, SetPostInfo] = useState([]);

   //포스트 가져오기
   const GetPosts = () => {
    fetch('http://localhost:8080/posts', { method: 'GET',})
    .then((response) => response.json())
    .then((result) => {
      SetPostInfo( result);
    })
    .catch((error) => alert(error));
  };

  

   const navigate = useNavigate();

//State에서 값을  추출
const location = useLocation();
const { username, isLoggedIn } = location.state || {}; // 전달된 state에서 값 추출

// 로그인 데이터 상태
const [userName, SetUserName] = useState('');
const [isLogged, SetIsLogged] = useState(false);

// username과 isLoggedIn이 변경되었을 때 상태를 업데이트
useEffect(() => {
  if (username && isLoggedIn !== undefined) {
    SetUserName(username);
    SetIsLogged(isLoggedIn);
  }
}, [username, isLoggedIn]); // username과 isLoggedIn이 변경될 때마다 실행


useEffect(() => {
  GetPosts();
}, []); //첫로딩때만 실행
useEffect(() => {
    
}, [postInfo]);


const postItems = postInfo.map(idx => {
  //li: 리스트 아이템
  return(
  <li style={PostPreviewContrainerStyle} key={idx}>
    <h3>{idx + 1}. {postInfo.title}</h3>
    <p>작성자: {postInfo.nickname}</p>
    <p>내용: {postInfo.detail}</p>
  </li>
  );
});


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
            <button style={btnStyle} onClick={logout}> 글 작성하기</button>
            <button style={btnStyle} onClick={logout}> 로그아웃</button>
          </>     
        }
      </div>
      <div>
          { isLogged ? <span style={userNameTextStyle}> {userName}님 안녕하세요 </span> : <span style={userNameTextStyle}> 로그인을 해주세요 </span> }
      </div>

      <div style={PostContrainerStyle}>
        <span style={LoggedtextStyle}> 게시물 목록 </span>
          {postInfo.length > 0 ? (
              postItems // 중괄호를 추가로 사용하지 않습니다
          ) : (
              <p>게시물이 없습니다.</p>
          )}
        </div>

      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/login" element={<LoginPage />} /> {/* /login 경로에서 LoginPage 컴포넌트를 렌더링 */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
