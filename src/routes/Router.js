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

import NoticeRequestDetail from 'pages/NoticeDetail';
import ContestProblem from 'pages/ContestProblem';
import ContestDetail from 'pages/ContestDetail';
import CreateWorkbook from 'pages/Admin/CreateWorkbook';
import WorkbookQuestion from 'pages/WorkbookQuestion';
import Review from 'pages/Review';
import ContestResultPage from 'pages/ContestResult';
import WorkbookProblemAdd from 'pages/Admin/WorkbookProblemAdd';
import CreateNotice from 'pages/Admin/CreateNotice';
import AdminRoot from 'pages/Admin/AdminRoot';

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
            path: ':requestId/edit',
            element: <RequestWrite />,
          },
          {
            path: 'new',
            element: <RequestWrite />,
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
            index: false,
            path: ':questionId',
            element: <WorkbookQuestion />,
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
            path: ':contestId/result',
            element: <ContestResultPage />,
          },
          {
            path: ':contestId/contestproblem',
            element: <ContestProblem />,
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
  {
    path: '/admin',
    element: <AdminRoot />,
    children: [
      {
        children: [
          {
            path: 'createproblem',
            loader: checkAdminLoader,
            element: <CreateProblem />,
          },
        ],
      },
      {
        children: [
          {
            path: 'list',
            loader: checkAdminLoader,
            element: <AdminNoticeRequest />,
          },
          {
            path: 'createnotice',
            loader: checkAdminLoader,
            element: <CreateNotice />,
          },
        ],
      },

      {
        children: [
          {
            path: 'createworkbook',
            loader: checkAdminLoader,
            element: <CreateWorkbook />,
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
            path: 'createcontest',
            loader: checkAdminLoader,
            element: <CreateContest />,
          },
        ],
      },
    ],
  },
]);

export default router;
