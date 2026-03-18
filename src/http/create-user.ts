import { axiosFetcher } from "@/lib/axios";

type CreateUserInput = {
  email: string;
  name: string;
  role: UserRole;
};

export const createUser = async (input: CreateUserInput) => {
  const { data } = await axiosFetcher.post("/users/create", input);
  return data;
};
