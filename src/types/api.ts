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
export interface ApiResponse {
  totalPages: number;
  totalElements: bigint;
  size: number;
  content: ContentItem[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  last: boolean;
  numberOfElements: number;
  pageable: {
    offset: bigint;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    paged: boolean;
    pageSize: number;
    pageNumber: number;
    unpaged: boolean;
  };
  empty: boolean;
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
// export interface RequestCheildComment {}

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

export type ContestContent = {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  participants: number;
};

export interface ContestList {
  content: ContestContent[];
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

export interface ContestResult {
  score: number;
  total: number;
  details: ContestDetail[];
}

export type ContestRankingContent = {
  memberId: number;
  name: string;
  score: number;
  endTime: number | null;
};

export interface ContestRanking extends Omit<ContestList, 'content'> {
  content: ContestRankingContent[];
}

export interface ContestMyRanking {
  ranking: boolean | null;
}
