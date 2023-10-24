import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from 'react-router-dom';
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
import Review from 'pages/Review';
import ContestResultPage from 'pages/ContestResult';
import WorkbookProblemAdd from 'pages/Admin/WorkbookProblemAdd';
import CreateNotice from 'pages/Admin/CreateNotice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'notice',
        children: [
          {
            index: true,
            element: <Notice />,
          },
          {
            path: ':Id',
            element: <NoticeRequestDetail />,
          },
          {
            path: 'admin/list',
            loader: checkAdminLoader,
            element: <AdminNoticeRequest />,
          },
          {
            path: 'admin/Createnotice',
            loader: checkAdminLoader,
            element: <CreateNotice />,
          },
        ],
      },
      {
        path: 'request',
        children: [
          {
            index: true,
            element: <Request />,
          },
          {
            path: ':requestId',
            element: <RequestDetailPage />,
          },
          {
            path: 'new',
            element: <RequestWrite />,
          },
          {
            path: ':requestId/edit',
            loader: checkAdminLoader,
            element: <RequestWrite />,
          },
          {
            path: 'admin/RequestQuestion',
            loader: checkAdminLoader,
            element: <RequestQuestion />,
          },
        ],
      },
      {
        path: 'workbook',
        children: [
          {
            index: true,
            element: <Workbook />,
          },
          {
            path: 'admin/CreateWorkbook',
            loader: checkAdminLoader,
            element: <CreateWorkbook />,
          },
          {
            path: ':questionId',
            element: <WorkbookQuestion />,
          },
          {
            path: ':questionId/question',
            loader: checkAdminLoader,
            element: <WorkbookProblemAdd />,
          },
        ],
      },
      {
        path: 'contest',
        children: [
          {
            index: true,
            element: <Contest />,
          },
          {
            path: ':contestId',
            element: <ContestDetail />,
          },
          {
            path: ':contestId/contestproblem',
            element: <ContestProblem />,
          },
          {
            path: ':contestId/result',
            loader: checkAdminLoader,
            element: <ContestResultPage />,
          },
          {
            path: 'admin/CreateContest',
            loader: checkAdminLoader,
            element: <CreateContest />,
          },
        ],
      },
      {
        path: 'problem',
        children: [
          {
            index: true,
            element: <Problem />,
          },
          {
            path: ':problemId',
            element: <ProblemDetailPage />,
          },
          {
            path: 'admin/CreateProblem',
            loader: checkAdminLoader,
            element: <CreateProblem />,
          },
        ],
      },
      {
        path: 'membersranks',
        children: [
          {
            index: true,
            element: <MembersRanks />,
          },
        ],
      },
      {
        path: 'mypage',
        children: [
          {
            index: true,
            loader: checkAdminLoader,
            element: <MyPage />,
          },
        ],
      },
      { path: 'oauth2/login', element: <OAuthRedirect /> },
    ],
  },
]);

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           {/* path = 경로  element = 컴포넌트*/}
//           <Route path="/" element={<Main />} />
//           <Route path="/notice" element={<Notice />} />
//           <Route path="/notice/:Id" eleme={<NoticeRequestDetail />} />
//           <Route path="/admin/notice" element={<CreateBoard />} />

//           <Route path="/request" element={<Request />} />
//           <Route path="/request/:requestId" element={<RequestDetailPage />} />
//           <Route path="/request/new" element={<RequestWrite />} />
//           <Route path="/request/:requestId/edit" element={<RequestEdit />} />
//           <Route path="/workbook" element={<Workbook />} />
//           <Route path="/contest" element={<Contest />} />
//           <Route path="/problem" element={<Problem />} />
//           <Route path="/problem/:problemId" element={<ProblemDetailPage />} />
//           <Route path="/membersranks" element={<MembersRanks />} />
//           <Route path="/mypage" element={<MyPage />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route
//             path="/admin/CreateProblem"
//             element={
//               <AdminRoute
//                 authenticated={checkAdminLoader()}
//                 component={<CreateProblem />}
//               />
//             }
//           />
//           <Route
//             path="/admin/Notion"
//             element={
//               <AdminRoute
//                 authenticated={checkAdminLoader()}
//                 component={<CreateNotice />}
//               />
//             }
//           />
//           <Route
//             path="/admin/CreateContest"
//             element={
//               <AdminRoute
//                 authenticated={checkAdminLoader()}
//                 component={<CreateContest />}
//               />
//             }
//           />
//           <Route
//             path="/admin/RequestQuestion"
//             element={
//               <AdminRoute
//                 authenticated={checkAdminLoader()}
//                 component={<RequestQuestion />}
//               />
//             }
//           />
//           <Route
//             path="workbook/admin/CreateWorkbook"
//             element={
//               <AdminRoute
//                 authenticated={checkAdminLoader()}
//                 component={<CreateWorkbook />}
//               />
//             }
//           />
//           <Route
//             path="workbook/:questionId"
//             element={
//               <AdminRoute
//                 authenticated={checkAdminLoader()}
//                 component={<WorkbookQuestion />}
//               />
//             }
//           />
//           <Route
//             path="/workbook/:questionId/question"
//             element={<WorkbookProblemAdd />}
//           />

          <Route path="/oauth2/login" element={<OAuthRedirect />} />
          <Route path="/contestinfo" element={<ContestDetail />} />
          <Route path="/contestproblem" element={<ContestProblem />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default Router;
