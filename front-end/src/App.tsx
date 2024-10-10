import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Nav from "./components/HomeNav/Nav";
import "./index.css";
import About from "./pages/About";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";

// 각 페이지에 해당하는 컴포넌트들

function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* 라우팅 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="*" element={<h2>페이지를 찾을 수 없습니다</h2>} />
          {/* 동적 파라미터 쓸 땐 useParams() 사용하세연 */}
          {/* <Route path="/user/:username" element={<UserProfile />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
