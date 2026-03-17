import { Input } from "@/components/ui/input";

export const PatientSearchInput = () => {
  return (
    <Input
      placeholder="Pesquise pacientes por nome ou ID..."
      className="max-w-[50%]"
    />
  );
};
