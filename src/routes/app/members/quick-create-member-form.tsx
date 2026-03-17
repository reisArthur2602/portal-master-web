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
import { PlusCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";

const useQuickCreateMember = () => {
  const form = useForm();
  return { form };
};

export const QuickCreateMemberForm = () => {
  const { form } = useQuickCreateMember();
  return (
    <div className="rounded-2xl bg-white border p-6 space-y-6">
      <Heading title="Registro rápido" icon={PlusCircleIcon} />
      <Form {...form}>
        <form className="grid grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="fullName"
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
                  <Input placeholder="jane.smith@medexam.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-full flex justify-end items-center gap-3">
            <Button variant="outline">Limpar formulário</Button>
            <Button>Confirmar e adicionar membro</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
