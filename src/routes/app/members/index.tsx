import { MembersHeader } from "./members-header";
import { MembersTable } from "./members-table";
import { QuickCreateMemberForm } from "./quick-create-member-form";

const membersData: User[] = [
  {
    id: "1",
    name: "Dr. Ricardo Almeida",
    email: "ricardo.almeida@clinic.com",
    role: "Medical Staff",
  },
  {
    id: "2",
    name: "Dra. Fernanda Costa",
    email: "fernanda.costa@clinic.com",
    role: "Medical Staff",
  },
  {
    id: "3",
    name: "Lucas Mendes",
    email: "lucas.mendes@clinic.com",
    role: "Staff",
  },
  {
    id: "4",
    name: "Patrícia Souza",
    email: "patricia.souza@clinic.com",
    role: "Staff",
  },
  {
    id: "5",
    name: "Amanda Ribeiro",
    email: "amanda.ribeiro@clinic.com",
    role: "Admin",
  },
];

export const Members = () => {
  return (
    <div className="flex flex-col">
      <MembersHeader />
      <main className="p-8 space-y-8">
        <div>
          <h1 className="font-black">Gestão de Equipe</h1>
          <p>Gerencie sua equipe clínica, médicos e administradores.</p>
        </div>
        <QuickCreateMemberForm />
        <MembersTable data={membersData} />
      </main>
    </div>
  );
};
