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
import { checkAdminLoader } from '../../src/repository/auth';
import RequestEdit from 'pages/Request/RequestEdit';
import AdminRoute from './AdminRouter';
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
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
          <Route path="/oauth2/login" element={<OAuthRedirect />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default Router;
