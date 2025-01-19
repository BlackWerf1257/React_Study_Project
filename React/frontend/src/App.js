import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ViewPost from './ViewPost';
import NewPost from './NewPost';

function App() {
  //CSS
  const topStyle = {
    backgroundColor: '#D7FFF0',
    border: 'solid',
    height: '80px',
    width: 'auto',
    display: 'flex',
    position: 'relative',
    alignItems: 'center', // 세로 중앙 정렬
    justifyContent: 'center', // 가로 중앙 정렬
  };

  const btnStyle = {
    padding: '20px 20px',
    backgroundColor: '#FFFFFF',
    fontSize: '12px',
    marginLeft: 'auto',
    marginRight: '60px',
    width: 'auto',
    display: 'inline-block',
    flexShrink: 0,
  };

  const LoggedtextStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: '40px',
    marginLeft: '200px',
  };

  const LogOutedtextStyle = {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: '40px',
    marginLeft: '400px',
  };

  const userNameTextStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px',
    width: '100%',
    position: 'relative',
    top: '20px',
    fontSize: '20px',
  };

  const PostContrainerStyle = {
    backgroundColor: '#FFFFFF',
    border: 'solid',
    width: '80%',
    height: 'auto',
    display: 'flex',
    marginTop: '80px',
    marginLeft: '180px',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'start',
    flexDirection: 'column',
    borderWidth: 'thin',
    minHeight: 'calc(100vh - 230px)',
  };

  const PostPreviewContrainerStyle = {
    backgroundColor: '#FFFFFF',
    border: 'solid',
    width: '100%',
    margin: '10px auto',
    height: '10%',
    display: 'flex',
    marginTop: '10px',
    marginBottom: '10px',
    position: 'relative',
    alignItems: 'start',
    borderWidth: 'thin',
    flexDirection: 'column',
    minWidth: '1000px',
  };

  const PostPreviewUpperContainer = {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    marginBottom: '10px',
    marginLeft: '30px',
    position: 'relative',
    alignItems: 'start',
    justifyContent: 'start',
    borderWidth: 'thin',
  };

  const titleStyle = {
    marginRight: '30px',
    justifyContent: 'start',
  };

  const previewTextStyle = {
    marginLeft: '30px',
  };

  const navigate = useNavigate();
  const location = useLocation();

  const [postInfo, SetPostInfo] = useState([]);
  const [userName, SetUserName] = useState('');
  const [isLogged, SetIsLogged] = useState(false);

  // State에서 값을 추출
  const { username, isLoggedIn } = location.state || {}; // 전달된 state에서 값 추출

  // 포스트 가져오기
  const GetPosts = () => {
    fetch('http://localhost:8080/posts')
      .then((response) => response.json())
      .then((result) => {
        SetPostInfo(result);
      })
      .catch((error) => alert(error));
  };

  // 페이지 이동 함수
  const mainPage = () => {
    navigate('/');
  }
  const register = () => {
    navigate('/register');
  };
  const login = () => {
    navigate('/login');
  };
  const logout = () => {
    alert('로그아웃되었습니다');
    SetIsLogged(false);
    SetUserName('');
  };
  const newPost = () => {
    navigate('/newPost', { state  : {userName, isLogged }});
  };

  const viewPost = (post) => {
    navigate('/viewPost', { state: {post, isLogged}});
  };

  
  useEffect(() => {
    if (username && isLoggedIn !== undefined) {
      SetUserName(username);
      SetIsLogged(isLoggedIn);
    }
  }, [username, isLoggedIn]);

  useEffect(() => {
    GetPosts();
  }, []);

  //기존 컴포넌트 렌더링 취소용(location.pathname 사용)
  //location.pathname: JS에서 hostname의 뒤 문자 '/' 뒤의 문자 경로를 반환
  const RenderPreviewPosts = location.pathname === '/';

  return (
    <div>
      <div style={topStyle}>
            {!isLogged ? (
              <>
                <span style={LogOutedtextStyle} onClick={mainPage}> React 공부용 사이트 </span>
                <button style={btnStyle} onClick={login}> 로그인 </button>
                <button style={btnStyle} onClick={register}> 회원가입 </button>
              </>
            ) : (
              <>
                <span style={LoggedtextStyle} onClick={mainPage}> React 공부용 사이트 </span>
                <button style={btnStyle} onClick={newPost}> 글 작성하기
                </button>
                <button style={btnStyle} onClick={logout}> 로그아웃 </button>
              </>
            )}
          </div>

          
      {RenderPreviewPosts && (
        <>
          <div>
            {isLogged ? (
              <span style={userNameTextStyle}> {userName}님 안녕하세요 </span>
            ) : (
              <span style={userNameTextStyle}>로그인을 해주세요</span>
            )}
          </div>
          <div style={PostContrainerStyle}>
            <span style={LoggedtextStyle}>게시물 목록</span>
            {postInfo.length > 0 ? (
              <ul>
                {postInfo.map((post, index) => (
                  <li style={PostPreviewContrainerStyle} key={index} onClick={() => viewPost(post)}>
                    <div style={PostPreviewUpperContainer}>
                      <h3 style={titleStyle}>
                        {post.index}. 제목: {post.title}
                      </h3>
                      <p>작성자: {post.nickname}</p>
                    </div>
                    <p style={previewTextStyle}>내용: {post.detail}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>게시물이 없습니다.</p>
            )}
          </div>
        </>
      )}

      {/* Routes: 페이지 별로 컴포넌트 렌더링 */}
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/viewPost" element={<ViewPost />} />
        <Route path="/newPost" element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App;
