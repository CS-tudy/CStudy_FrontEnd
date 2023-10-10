export interface SignInForm {
  email: string;
  password: string;
}

export interface SignUpForm extends SignInForm {
  name: string;
  emailAuthNumber?: string;
  passwordConfirm?: string;
}

export interface ContestSetForm {
  competitionTitle: string;
  participants: number;
  competitionStart: Date;
  competitionEnd: Date;
}

export interface WorkbookSetForm {
  title: string;
  description: string;
}
