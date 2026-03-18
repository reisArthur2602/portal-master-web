import { axiosFetcher } from "@/lib/axios";

export type ListUsersResponse = {
  users: Omit<User, "password">[];
};

export const listUsers = async () => {
  const { data } = await axiosFetcher.get<ListUsersResponse>("/users/list");
  return data;
};
