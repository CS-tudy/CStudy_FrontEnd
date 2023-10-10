import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Board from 'pages/Board';
import MembersRanks from 'pages/MembersRanks';
import ProblemSet from 'pages/Problem';
import Contest from 'pages/Contest';
import MyPage from 'pages/MyPage';
import Workbook from 'pages/Workbook';
import Layout from 'components/commons/Layout';
import Signup from 'pages/Signup';
import OAuthRedirect from 'pages/Admin/OauthRedirect';
import Request from 'pages/Request';
import RequestDetailPage from 'pages/RequestDetail';
import RequestWrite from 'pages/RequestWrite';
import CreateProblem from 'pages/Admin/CreateProblem';
import Notion from 'pages/Admin/Notion';
import CreateContest from 'pages/Admin/CreateContest';
import RequestQuestion from 'pages/Admin/RequestQuestion';
import { checkAdminLoader } from '../../src/repository/auth';
import RequestEdit from 'pages/Request/RequestEdit';
import CreateBoard from 'pages/Admin/Notice';
import Problem from 'pages/Problem';
import ProblemDetailPage from 'pages/ProblemDetail';
import CreateBoard from 'pages/Admin/Board';

import AdminRoute from './AdminRouter';
import NoticeRequestDetail from 'pages/NoticeDetail';
import ContestProblem from 'pages/ContestProblem';
import ContestDetail from 'pages/ContestDetail';
import ContestResult from 'pages/ContestResult';
import Review from 'pages/Review';
import CreateWorkbook from 'pages/Admin/CreateWorkbook';
import WorkbookQuestion from 'pages/WorkbookQuestion';
import Review from 'pages/Review';
import ContestResultPage from 'pages/ContestResult';
import WorkbookProblemAdd from 'pages/Admin/WorkbookProblemAdd';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* path = 경로  element = 컴포넌트*/}
          <Route path="/" element={<Main />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/:Id" element={<NoticeRequestDetail />} />
          <Route path="/admin/notice" element={<CreateBoard />} />
          <Route path="/request" element={<Request />} />
          <Route path="/requestdetail" element={<RequestDetailPage />} />
          <Route path="/requestwrite" element={<RequestWrite />} />
          <Route path="/request/:requestId" element={<RequestDetailPage />} />
          <Route path="/request/new" element={<RequestWrite />} />
          <Route path="/request/:requestId/edit" element={<RequestEdit />} />
          <Route path="/workbook" element={<Workbook />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/problem/:problemId" element={<ProblemDetailPage />} />
          <Route path="/membersranks" element={<MembersRanks />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/admin/CreateProblem"
            element={
              <AdminRoute
                authenticated={checkAdminLoader()}
                component={<CreateProblem />}
              />
            }
          />
          <Route
            path="/admin/Notion"
            element={
              <AdminRoute
                authenticated={checkAdminLoader()}
                component={<Notion />}
              />
            }
          />
          <Route
            path="/admin/CreateContest"
            element={
              <AdminRoute
                authenticated={checkAdminLoader()}
                component={<CreateContest />}
              />
            }
          />
          <Route
            path="/admin/RequestQuestion"
            element={
              <AdminRoute
                authenticated={checkAdminLoader()}
                component={<RequestQuestion />}
              />
            }
          />
          <Route
            path="workbook/admin/CreateWorkbook"
            element={
              <AdminRoute
                authenticated={checkAdminLoader()}
                component={<CreateWorkbook />}
              />
            }
          />
          <Route
            path="workbook/:questionId"
            element={
              <AdminRoute
                authenticated={checkAdminLoader()}
                component={<WorkbookQuestion />}
              />
            }
          />
          <Route
            path="/workbook/:questionId/question"
            element={<WorkbookProblemAdd />}
          />

          <Route path="/oauth2/login" element={<OAuthRedirect />} />
          <Route path="/contest/:contestId" element={<ContestDetail />} />
          <Route
            path="/contest/:contestId/contestproblem"
            element={<ContestProblem />}
          />
          <Route
            path="/contest/:contestId/result"
            element={<ContestResultPage />}
          />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Layout>
      <Routes>
        {/* path = 경로  element = 컴포넌트*/}
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<Board />} />
        <Route path="/request" element={<Request />} />
        <Route path="/request/:id" element={<RequestDetailPage />} />
        <Route path="/request/new" element={<RequestWrite />} />
        <Route path="/request/:id/edit" element={<RequestEdit />} />
        <Route path="/workbook" element={<Workbook />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/problemset" element={<ProblemSet />} />
        <Route path="/membersranks" element={<MembersRanks />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/oauth2/login" element={<OAuthRedirect />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
