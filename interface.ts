export interface Candidate {
  interviewRefNo: string;
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
