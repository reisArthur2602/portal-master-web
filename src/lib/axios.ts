import { ACCESS_TOKEN_VALUE } from "@/constants";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

export const axiosFetcher = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:6969",
});

axiosFetcher.interceptors.request.use(async (config) => {
  const cookie = await cookieStore.get(ACCESS_TOKEN_VALUE);

  if (cookie?.value) config.headers.Authorization = `Bearer ${cookie.value}`;

  return config;
});

axiosFetcher.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error instanceof AxiosError) {
      const status = error.response?.status;
      const message = error.response?.data?.message || "Erro na requisição";

      if (status === 401) {
        await cookieStore.delete(ACCESS_TOKEN_VALUE);
        window.location.href = "/sign-in";
        return Promise.reject(error);
      }

      toast.error(message);
      return Promise.reject(error);
    }

    toast.error("Erro interno do servidor...");
    return Promise.reject(error);
  },
);
