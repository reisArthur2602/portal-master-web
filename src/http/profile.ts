import { axiosFetcher } from "@/lib/axios";

type ProfileResponse = {
  user: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
  };
};

export const profile = async () => {
  const { data } = await axiosFetcher.get<ProfileResponse>("/users/profile");
  return data;
};
