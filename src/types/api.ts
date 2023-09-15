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
}

// mypage
export interface MyPage {
  id: number;
  name: string;
  email: string;
}
