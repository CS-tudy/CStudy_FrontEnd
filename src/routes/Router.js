import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Board from 'pages/Board';
import MembersRanks from 'pages/MembersRanks';
import ProblemSet from 'pages/Problem';
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
import RequestEdit from 'pages/Request/RequestEdit';
import CreateBoard from 'pages/Admin/Board';
import Problem from 'pages/Problem';
import ProblemDetailPage from 'pages/ProblemDetail';
import Notice from 'pages/Notice';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* path = 경로  element = 컴포넌트*/}
          <Route path="/" element={<Main />} />
          <Route path="/board" element={<Notice />} />
          <Route path="/admin/board" element={<CreateBoard />} />
          <Route path="/request" element={<Request />} />
          <Route path="/request/:requestId" element={<RequestDetailPage />} />
          <Route path="/request/new" element={<RequestWrite />} />
          <Route path="/request/:id/edit" element={<RequestEdit />} />
          <Route path="/workbook" element={<Workbook />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/problem" element={<Problem />} />
          {/* <Route path="/problem/:problemId" element={<Problem />} /> */}
          <Route path="/problem/id" element={<ProblemDetailPage />} />
          <Route path="/membersranks" element={<MembersRanks />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/CreateProblem" element={<CreateProblem />} />
          <Route path="/admin/Notion" element={<Notion />} />
          <Route path="/admin/CreateContest" element={<CreateContest />} />
          <Route path="/admin/RequestQuestion" element={<RequestQuestion />} />
          <Route path="/oauth2/login" element={<OAuthRedirect />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default Router;
