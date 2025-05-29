export interface IStyle {
  bg: string;
  width: number;
  height: number;
  padding: number;
  margin: number;
}

export interface Props {
  children: any;
}

export interface User {
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth: Date | null;
  email: string;
  password: string;
  confirmPassword: string;
  passwordQuestion: string;
  passwordAnswer: string;
  membershipStart: Date | null;
  membershipEnd: Date | null;
  transferEvidence: string;
}

export interface ITestimonyData {
  testimonyId: number;
  testimonyContent: string;
  testimonyImage: string;
  testimonyName: string;
  testimonyPosition: string;
}
