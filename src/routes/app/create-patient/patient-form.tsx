import { Heading } from "@/components/shared/heading";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Users2 } from "lucide-react";
import { useForm, useFormContext } from "react-hook-form";
import { Link } from "react-router";

const ContactsForm = () => {
  const form = useFormContext();
  return (
    <Form {...form}>
      <div className="p-8 space-y-6">
        <Heading title="Contato" icon={Phone} />
        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone *</FormLabel>
                <FormControl>
                  <Input placeholder="(00) 00000-0000" {...field} />
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
                  <Input placeholder="email@exemplo.com.br" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </Form>
  );
};

const PersonalInfoForm = () => {
  const form = useFormContext();
  return (
    <Form {...form}>
      <div className="p-8 space-y-6">
        <Heading title="Informações Pessoais" icon={Users2} />
        <div className="grid grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo *</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: João da Silva Santos" {...field} />
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
                <FormLabel>Data de Nascimento</FormLabel>
                <FormControl>
                  <Input {...field} type="date" />
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
                <FormLabel>CPF</FormLabel>
                <FormControl>
                  <Input placeholder="000.000.000-00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </Form>
  );
};

const AddressForm = () => {
  const form = useFormContext();
  return (
    <Form {...form}>
      <div className="p-8 space-y-6">
        <Heading title="Endereço Completo" icon={MapPin} />
        <div className="grid grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CEP *</FormLabel>
                <FormControl>
                  <Input placeholder="00000-000" {...field} />
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
                <FormLabel>Rua / Logradouro *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Nome da rua ou avenida" />
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
                <FormLabel>Nº *</FormLabel>
                <FormControl>
                  <Input placeholder="123" {...field} />
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
                <FormLabel>Cidade *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: São Gonçalo"
                    {...field}
                    readOnly
                    disabled
                  />
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
                <FormLabel>Estado *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: São Gonçalo"
                    {...field}
                    readOnly
                    disabled
                  />
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
                <FormLabel>Bairro</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nome do bairro"
                    {...field}
                    readOnly
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </Form>
  );
};

const usePatientForm = () => {
  const form = useForm();
  return { form };
};

export const PatientForm = () => {
  const { form } = usePatientForm();

  return (
    <Form {...form}>
      <form className="border bg-white rounded-2xl">
        <PersonalInfoForm />
        <ContactsForm />
        <AddressForm />
        <div className="flex justify-end gap-4 p-8 items-center">
          <Link
            to="/patients"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Cancelar
          </Link>
          <Button size="lg">Salvar Cadastro</Button>
        </div>
      </form>
    </Form>
  );
};
