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

/* hsw 임시 타입 설정*/
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
