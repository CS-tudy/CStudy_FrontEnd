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

export interface IProblem {
  title: string;
  categoryTitle: string;
  content: string[];
  description: string;
  explain: string;
  // choices: Choices[];
  totalElements: number;
}

// mypage
export interface MyPage {
  id: number;
  name: string;
  email: string;
}
