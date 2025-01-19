import { useState, useEffect } from 'react';
import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom'; // 페이지 이동용
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

function ViewPost(){
  //CSS
  //justify-content: center : 컴포넌트를 정렬할 위치
const topLayoutStyle = {
  border: 'solid',
  height: '80px',
  width: 'auto',
  display: 'flex',
  position: 'relative',
  alignItems: 'center', // 세로 중앙 정렬
  justifyContent: 'left', // 가로 중앙 정렬
}


const titleStyle = {
  marginLeft: '60px',
  fontSize: '20px'
}
 const titleTextStyle = {
    marginLeft: '30px',
    fontSize: '30px'
  }
  const writerStyle = {
    marginLeft: '200px',
    fontSize: '20px',
  }
  const detailContainerStyle = {
    border: 'solid',
    width: '100%',
    height : 'calc(100vh - 195px)',
  position: 'relative',
  }
  const detailTextStyle = {
    marginLeft: '60px',
    marginTop: '60px'
  }


   const navigate = useNavigate();

//State에서 값을  추출
const location = useLocation();

// 로그인 데이터 상태

   const { post, bLogged } = location.state || {};  // `post`와 `isLogged` 추출
   useEffect(() => {
  }, [bLogged]);





  return (
    <>
      <div style={topLayoutStyle}>
        <span style={titleStyle}> 제목 : </span>
        <span style={titleTextStyle}> {post.title} </span>
        <span style={writerStyle}> 작성자 : {post.nickname}</span>
      </div>

      <div style={detailContainerStyle}>
         <span style={detailTextStyle}> {post.detail} </span>
      </div>
    </>
  );
}

export default ViewPost;
