import { useQuery } from "@tanstack/react-query";
import { MembersHeader } from "./members-header";
import { MembersTable } from "./members-table";
import { QuickCreateMemberForm } from "./quick-create-member-form";
import { listUsers } from "@/http/list-users";

const useMembers = () => {
  const { data, isPending } = useQuery({
    queryKey: ["Users"],
    queryFn: listUsers,
  });

  return {
    patients: data?.users,
    loading: isPending,
  };
};

export const Members = () => {
  const { loading, patients } = useMembers();
  return (
    <div className="flex flex-col">
      <MembersHeader />
      <main className="p-8 space-y-8">
        <div>
          <h1 className="font-black">Gestão de Equipe</h1>
          <p>Gerencie sua equipe clínica, médicos e administradores.</p>
        </div>
        <QuickCreateMemberForm />
        <MembersTable data={patients || []} />
      </main>
    </div>
  );
};
