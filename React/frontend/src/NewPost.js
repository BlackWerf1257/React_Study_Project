import { useState, useEffect } from 'react';
import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom'; // 페이지 이동용

function NewPost(){
  //CSS
  //justify-content: center : 컴포넌트를 정렬할 위치
 const titleContainerStyle = {
    border: 'solid',
    height: '80px',
    width: 'auto',
    display: 'flex',
    position: 'relative',
    justifyContent: 'start', // 가로 중앙 정렬
    fontSize: '30px'
  }
  const titleInputStyle = {
    marginTop: '6px',
    marginLeft: '30px',
    width: '50%',
    height: '50%'
  }

  const detailStyle = {
    border: 'solid',
    height: '1000px',
    width: '100%',
    justifyContent: 'flex-start', // 가로 중앙 정렬
    alignItems: 'start',
  }

 const btnStyle = {
  padding: '20px 20px',
  backgroundColor: '#FFFFFF',
  fontSize: '12px',
  marginLeft: '60px',
  marginRight: '60px',
  width: 'auto',
  display: 'inline-block', // 버튼 크기를 텍스트에 맞게 조정
  flexShrink: 0, // 자식 박스의 다음줄로 넘어가는것 방지
  };

  const [title, SetTitle] = useState('');
  const [detail, SetDetail] = useState('');
  const [nickName, SetUserName] = useState('');
  const [isLoggedIn, SetLoggedBool] = useState('');
  
const navigate = useNavigate();
//State에서 값을  추출
const location = useLocation();

const { userName, isLogged } = location.state || {}; // 전달된 state에서 값 추출
    useEffect(() => {
      if (userName && isLogged !== undefined) {
        SetUserName(userName);
        SetLoggedBool(isLogged);
      }
    }, [userName, isLoggedIn]);

const handleSubmit = () => {
  if(isLoggedIn)
  {
    if(title != null && detail != null)
    {
  // fetch 요청 시 id와 password 상태값을 URL에 포함시킴
  fetch(`http://localhost:8080/api/submitPost?title=${title}&nickName=${nickName}&detail=${detail}`, { 
    method: 'POST',
    })
    .then((response) => response.text())
    .then((result) => {
        alert(result);
        navigate('/');
        window.location.reload();  // 페이지 새로 고침
    })
    .catch((error) => console.error('Error: ', error)); 
  }
  

  if(title == null || detail == null)
    console.log('제목과 내용을 모두 적어주세요');
}
}
const mainPage = () => {
  navigate('/');
}


  return (
    <>
    <div style={titleContainerStyle}>
      제목 : 
      <input style={titleInputStyle} onChange={val => SetTitle(val.target.value)}/>
    </div>
    <input style={detailStyle} onChange={val => SetDetail(val.target.value)}/>
    <button style={btnStyle} onClick={handleSubmit}>등록하기</button>
    <button style={btnStyle} onClick={mainPage}>취소하기</button>
</>
  );
}

export default NewPost;
