export interface LoginUserDto {
  memberId: number;
  roles: string[];
}

export interface selectAnswerProblemFromProps {
  problemId: string;
  formData: {
    choiceNumber: number;
    loginUserDto: LoginUserDto;
  };
}

export interface ProblemItem {
  questionId: number;
  questionTitle: string;
  categoryTitle: string;
}

export interface solveStatusProp {
  status: number;
}
