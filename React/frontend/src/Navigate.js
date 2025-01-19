import { Routes, Route } from 'react-router-dom';
import NewPost from './NewPost';
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import ViewPost from './ViewPost';


function Navigate() {

  return (
    <div>      
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/login" element={<LoginPage />} /> {/* /login 경로에서 LoginPage 컴포넌트를 렌더링 */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/viewPost" element={<ViewPost />} />
        <Route path="/newPost" element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default Navigate;
