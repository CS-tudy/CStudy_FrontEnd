import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Board from 'pages/Board';
import MembersRanks from 'pages/MembersRanks';
import ProblemSet from 'pages/ProblemSet';
import Contest from 'pages/Contest';
import MyPage from 'pages/MyPage';
import Footer from 'components/commons/Footer/footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* path = 경로  element = 컴포넌트*/}
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<Board />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/problemset" element={<ProblemSet />} />
        <Route path="/membersranks" element={<MembersRanks />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
