export interface Candidate {
  interviewRefNo: number;
  firstName: string;
  lastName: string;
  major: string;
}

export enum CandidateType {
  content = "content",
  design = "design",
  marketing = "marketing",
  programming = "programming",
}
