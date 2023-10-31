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
  totalPages: number;
  totalElements: number;
}

// Problem
// export interface Problem extends Omit<ContestList, 'content'> {
export type ProblemContent = {
  questionId: number;
  questionTitle: string;
  categoryTitle: string;
  status: number;
};

export interface IProblemList {
  content?: ProblemContent[];
}

type Choices = {
  number: number;
  content: string;
};

export interface IProblem {
  title: string;
  categoryTitle: string;
  content: ProblemContent[];
  description: string;
  explain: string;
  choices: Choices[];
  totalElements: number;
  totalPages?: number;
}

// mypage
export interface MyPage {
  id: number;
  name: string;
  email: string;
}

// rank
export interface Ranks {
  score: number | null;
  value: string | null;
}

// contest
export interface Contest {
  title: string;
  startTime: string;
  endTime: string;
  participants: number;
  maxParticipants: number;
}

export interface ContestProblem {
  questionId: number;
  description: string;
  choices: Choices[];
}

type ContestSort = {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
};

type ContestPageAble = {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: ContestSort;
  unpaged: boolean;
};

export type ContestInfo = {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  participants: number;
};

export interface ContestList {
  content: ContestInfo[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: ContestPageAble;
  size: number;
  sort: ContestSort;
  totalElements: number;
  totalPages: number;
}

type ContestDetail = {
  questionId: number;
  choiceNumber: number;
  correct: boolean;
};

export interface IContestResult {
  score: number;
  total: number;
  details: ContestDetail[];
}

export type ContestRankContent = {
  memberId: number;
  name: string;
  score: number;
  endTime: number | null;
};

export interface IContestRank extends Omit<ContestList, 'content'> {
  content: ContestRankContent[];
}

export interface ContestMyRank {
  ranking: boolean | null;
}

/* hsw comment type*/
export interface RequestComment {
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

//Workbook
export interface WorkbookSetForm {
  title: string;
  description: string;
}

type WorkbookContent = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  fileName: string;
};
export interface WorkbookList extends Omit<ContestList, 'content'> {
  content: WorkbookContent[];
}

export type Workbook = WorkbookContent;

export type WorkbookQuestionContent = {
  title: string;
  questionId: number;
  workbookQuestionId: number;
};

export interface WorkbookQuestion extends Omit<ContestList, 'content'> {
  content: WorkbookQuestionContent[];
}
