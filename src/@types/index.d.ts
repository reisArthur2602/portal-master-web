type Patient = {
  id: string;
  name: string;
  examsCount: number;
  cpf: string;
  phone: string;
};

type UserRole = "Medical" | "Staff" | "Admin";

type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

type ExamType = "EXTERNAL" | "DICOM";
type ExamStatus = "PENDING" | "REPORTED";

type Exam = {
  id: string;
  description: string;
  type: ExamType;
  status: ExamStatus;
  createdAt: string;
};
