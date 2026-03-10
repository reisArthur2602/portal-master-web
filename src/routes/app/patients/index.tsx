import { PatientsCard } from './patients-card';
import { PatientsHeader } from './patients-header';
import { PatientsTable } from './patients-table';

const patientsData: Patient[] = [
    {
        id: '1',
        name: 'Carlos Henrique Souza',
        cpf: '123.456.789-09',
        phone: '(21) 99876-5432',
        examsCount: 3,
    },
    {
        id: '2',
        name: 'Mariana Alves Ribeiro',
        cpf: '987.654.321-00',
        phone: '(11) 91234-5678',
        examsCount: 7,
    },
    {
        id: '3',
        name: 'Felipe Martins Costa',
        cpf: '456.123.789-10',
        phone: '(31) 98711-2233',
        examsCount: 2,
    },
    {
        id: '4',
        name: 'Juliana Ferreira Lima',
        cpf: '741.852.963-20',
        phone: '(41) 99988-7766',
        examsCount: 9,
    },
    {
        id: '5',
        name: 'Rafael Gomes Santos',
        cpf: '852.963.147-30',
        phone: '(51) 98877-6655',
        examsCount: 1,
    },
];

export const Patients = () => {
    return (
        <div className="flex flex-col">
            <PatientsHeader />

            <main className="p-8 space-y-8">
                <div>
                    <h1 className='font-black'>Patients Directory</h1>
                    <p>
                        Manage all registered patient records, exam history, and medical profiles.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <PatientsCard label="Total Patients" value="1,284" />
                    <PatientsCard label="Pending Exams" value="42" />
                    <PatientsCard label="Avg. Exams per Patient" value="3.8" />
                </div>

                <PatientsTable data={patientsData} />
            </main>
        </div>
    );
};
