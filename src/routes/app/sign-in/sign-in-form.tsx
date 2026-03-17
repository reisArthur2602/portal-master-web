import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ACCESS_TOKEN_VALUE } from "@/constants";
import { login } from "@/http/login";
import { useMutation } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/schema/sign-in";
import { z } from "zod";
import { useAuthStore } from "@/stores/auth";

type FormData = z.infer<typeof signInSchema>;

const useSignIn = () => {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  const { mutateAsync: handleLogin } = useMutation({
    mutationFn: login,
    onSuccess: ({ accessToken, user }) => {
      cookieStore.set(ACCESS_TOKEN_VALUE, accessToken);
      setUser(user);
      navigate("/app/patients");
    },
  });

  const onSubmit = async (data: FormData) => await handleLogin(data);

  return { form, onSubmit };
};

export const SignInForm = () => {
  const { form, onSubmit } = useSignIn();

  return (
    <div className="max-w-130 overflow-hidden rounded-3xl flex flex-col ">
      {/* HEADER */}
      <div className="bg-linear-to-bl to-blue-800 from-primary px-10 py-20">
        <div className="text-white space-y-2">
          <h1 className="text-3xl font-heading font-bold">
            Bem-vindo(a) de volta!
          </h1>
          <p className="text-white/70 text-base">
            Acesse seu portal médico seguro para gerenciar exames, visualizar
            resultados e se comunicar com seu profissional de saúde.
          </p>
        </div>
      </div>

      <div
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-10 bg-white space-y-6 gap-6"
      >
        <Heading title="Acesse sua conta" icon={Heart} />
        <Form {...form}>
          <form className="grid gap-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* PASSWORD */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button size="lg">Entrar</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
