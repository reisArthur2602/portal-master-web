import { CreatePatientBreadcrumb } from './create-patient-breadcrumb';
import { PatientForm } from './patient-form';

export const CreatePatient = () => {
    return (
        <main className="p-8 flex flex-col gap-6">
            <CreatePatientBreadcrumb />
            <div>
                <h1 className="font-black">Cadastrar Novo Paciente</h1>
                <p>
                    Preencha os campos abaixo com os dados cadastrais do paciente para iniciar o
                    acompanhamento.
                </p>
            </div>
            <PatientForm />
        </main>
    );
};
