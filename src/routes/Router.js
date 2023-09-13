import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Board from 'pages/Board';
import MembersRanks from 'pages/MembersRanks';
import ProblemSet from 'pages/ProblemSet';
import Contest from 'pages/Contest';
import MyPage from 'pages/MyPage';
import Workbook from 'pages/Workbook';
import Signup from 'pages/Signup';
import Layout from 'components/commons/Layout';
import OAuthRedirect from 'pages/OauthRedirect';
import Request from 'pages/Request';
import RequestDetailPage from 'pages/RequestDetail';
import RequestWrite from 'pages/RequestWrite';
import CreateProblem from 'pages/Admin/CreateProblem';
import Notion from 'pages/Admin/Notion';
import CreateContest from 'pages/Admin/CreateContest';
import RequestQuestion from 'pages/Admin/RequestQuestion';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        {/* path = 경로  element = 컴포넌트*/}
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<Board />} />
        <Route path="/request" element={<Request />} />
        <Route path="/request/:id" element={<RequestDetailPage />} />
        <Route path="/requestwrite" element={<RequestWrite />} />
        <Route path="/workbook" element={<Workbook />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/problemset" element={<ProblemSet />} />
        <Route path="/membersranks" element={<MembersRanks />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/CreateProblem" element={<CreateProblem />} />
        <Route path="/admin/Notion" element={<Notion />} />
        <Route path="/admin/CreateContest" element={<CreateContest />} />
        <Route path="/admin/RequestQuestion" element={<RequestQuestion />} />
        <Route path="/oauth2/login" element={<OAuthRedirect />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
