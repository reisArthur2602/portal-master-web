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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { USER_ROLE_OPTIONS } from "@/constants";
import { createUser } from "@/http/create-user";
import { queryClient } from "@/providers/tanstack-query";
import { createUserSchema } from "@/schema/create-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { PlusCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

type FormData = z.infer<typeof createUserSchema>;

const useQuickCreateMember = () => {
  const form = useForm<FormData>({
    defaultValues: { email: "", name: "", role: "Staff" },
    resolver: zodResolver(createUserSchema),
  });

  const { mutateAsync: handleCreateUser } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      form.reset();
      queryClient.cancelQueries({ queryKey: ["Users"] });
      toast.success("Usuário adicionado com sucesso");
    },
  });

  const onSubmit = form.handleSubmit(
    async (data: FormData) => await handleCreateUser(data),
  );

  const onCleanForm = () => form.reset();
  return { form, onSubmit, onCleanForm };
};

export const QuickCreateMemberForm = () => {
  const { form, onSubmit, onCleanForm } = useQuickCreateMember();
  return (
    <div className="rounded-2xl bg-white border p-6 space-y-6">
      <Heading title="Registro rápido" icon={PlusCircleIcon} />
      <Form {...form}>
        <form className="grid grid-cols-3 gap-6" onSubmit={onSubmit}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Dr. Jane Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email </FormLabel>
                <FormControl>
                  <Input placeholder="jane.smith@medexam.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cargo</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o cargo" />
                    </SelectTrigger>

                    <SelectContent>
                      {USER_ROLE_OPTIONS.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-full flex justify-end items-center gap-3">
            <Button variant="outline" onClick={onCleanForm} type="button">
              Limpar formulário
            </Button>
            <Button>Confirmar e adicionar membro</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
