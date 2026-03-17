import { axiosFetcher } from "@/lib/axios";

type LoginInput = {
  email: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
  };
};

export const login = async (input: LoginInput) => {
  const { data } = await axiosFetcher.post<LoginResponse>(
    "/users/login",
    input,
  );

  return data;
};
