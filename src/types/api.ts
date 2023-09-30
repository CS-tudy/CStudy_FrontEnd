// Request
export interface RequestDetail {
  id: number;
  flag: boolean;
  title: string;
  description: string;
  memberId: number;
  memberName: string;
  createAt: string;
}

export type RequestContent = {
  id: number;
  memberId: number;
  title: string;
  memberName: string;
  description: string;
  createAt: string;
  flag: boolean;
};

export interface AddboardListForm {
  content: string;
  title: string;
}

/* hsw notice type*/
export interface RequestNoticeList {
  totalPages: number;
  totalElements: number;
  size: number;
  content: ContentItem[];
  number: number;
  numberOfElements: number;
}

interface ContentItem {
  id: number;
  title: string;
  content: string;
  createdDate: string;
}

export interface RequestNoticeDetail {
  id: number;
  title: string;
  content: string;
  createdDate: string;
}
// export interface ToggleRequestList extends Omit<ContestList, 'content'> {
export interface ToggleRequestList {
  content: RequestContent[];
  totalPages?: number;
}

// Problem
// export interface Problem extends Omit<ContestList, 'content'> {
export type ProblemContent = {
  questionId: number;
  questionTitle: string;
  categoryTitle: string;
  status: number;
};

export interface ProblemList {
  content: ProblemContent[];
}

export interface Problem {
  title: string;
  categoryTitle: string;
  description: string;
  explain: string;
  // choices: Choices[];
}

// mypage
export interface MyPage {
  id: number;
  name: string;
  email: string;
}

/* hsw comment type*/

export interface RequestComment {
  map(
    arg0: (comment: RequestComment) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode;
  id: string;
  content: string;
  memberId: string;
  author: string;
  parentCommentId: string;
  childComments: [];
}

export interface AddComment {
  noticeId: string;
  content: string;
  parentCommentId?: string;
}
// export interface RequestCheildComment {}
