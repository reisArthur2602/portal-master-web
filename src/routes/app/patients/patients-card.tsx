type PatientCard = {
    label: string;
    value: string;
};

export const PatientsCard = ({ label, value }: PatientCard) => {
    return (
        <div className="p-6 bg-white border rounded-2xl space-y-2">
            <div className="uppercase font-bold text-xs text-muted-foreground">{label}</div>
            <div className="font-black text-3xl">{value}</div>
        </div>
    );
};
