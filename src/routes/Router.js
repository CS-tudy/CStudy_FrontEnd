import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from 'react-router-dom';
import Main from 'pages/Main';
import MembersRanks from 'pages/MembersRanks';
import Contest from 'pages/Contest';
import MyPage from 'pages/MyPage';
import Workbook from 'pages/Workbook';
import Signup from 'pages/Signup';
import Layout from 'components/commons/Layout';
import OAuthRedirect from 'pages/Admin/OauthRedirect';
import Request from 'pages/Request';
import RequestDetailPage from 'pages/RequestDetail';
import RequestWrite from 'pages/RequestWrite';
import CreateProblem from 'pages/Admin/CreateProblem';
import CreateContest from 'pages/Admin/CreateContest';
import RequestQuestion from 'pages/Admin/RequestQuestion';
import { checkAdminLoader } from '../../src/repository/auth';
import RequestEdit from 'pages/Request/RequestEdit';
import AdminNoticeRequest from 'pages/Admin/Notice';
import Problem from 'pages/Problem';
import ProblemDetailPage from 'pages/ProblemDetail';
import Notice from 'pages/Notice';

import AdminRoute from './AdminRouter';
import NoticeRequestDetail from 'pages/NoticeDetail';
import ContestProblem from 'pages/ContestProblem';
import ContestDetail from 'pages/ContestDetail';
import CreateWorkbook from 'pages/Admin/CreateWorkbook';
import WorkbookQuestion from 'pages/WorkbookQuestion';
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
        children: [
          {
            path: 'notice',
            element: <Notice />,
          },
          {
            path: ':Id',
            element: <NoticeRequestDetail />,
          },
          {
            path: 'admin/notice',
            loader: checkAdminLoader,
            element: <AdminNoticeRequest />,
          },
          {
            path: 'admin/createnotice',
            loader: checkAdminLoader,
            element: <CreateNotice />,
          },
        ],
      },
      {
        children: [
          {
            path: 'request',
            element: <Request />,
          },
          {
            path: 'request/:requestId',
            element: <RequestDetailPage />,
          },
          {
            path: 'request/new',
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
        children: [
          {
            path: 'workbook',
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
        children: [
          {
            path: 'contest',
            element: <Contest />,
          },
          {
            path: 'contest/:contestId',
            element: <ContestDetail />,
          },
          {
            path: 'contest/:contestId/contestproblem',
            element: <ContestProblem />,
          },
          {
            path: 'contest/:contestId/result',
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
        children: [
          {
            path: 'problem',
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
        children: [
          {
            path: 'membersranks',
            element: <MembersRanks />,
          },
        ],
      },
      {
        loader: checkAdminLoader,
        children: [
          {
            path: 'mypage',
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

//           <Route path="/oauth2/login" element={<OAuthRedirect />} />
//           <Route path="/contest/:contestId" element={<ContestDetail />} />
//           <Route
//             path="/contest/:contestId/contestproblem"
//             element={<ContestProblem />}
//           />
//           <Route
//             path="/contest/:contestId/result"
//             element={<ContestResultPage />}
//           />
//           <Route path="/review" element={<Review />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// };

export default router;
