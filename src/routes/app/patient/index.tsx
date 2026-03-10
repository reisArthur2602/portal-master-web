import { useParams } from 'react-router';
import { ClinicalNotes } from './clinical-notes';
import { ExamHistoryTable } from './exam-history-table';
import { GeneratePortalAccess } from './generate-portal-access';
import { PatientBreadcrumb } from './patient-breadcrumb';
import { PatientProfile } from './patient-profile';
import { PersonalInformation } from './personal-information';

const examsMock: Exam[] = [
    {
        id: '1',
        description: 'Chest CT Scan',
        type: 'DICOM',
        status: 'REPORTED',
        createdAt: new Date().toDateString(),
    },
    {
        id: '2',
        description: 'Abdominal Ultrasound',
        type: 'EXTERNAL',
        status: 'PENDING',
        createdAt: new Date().toDateString(),
    },
    {
        id: '3',
        description: 'Brain MRI',
        type: 'DICOM',
        status: 'PENDING',
        createdAt: new Date().toDateString(),
    },
    {
        id: '4',
        description: 'Knee X-Ray',
        type: 'EXTERNAL',
        status: 'REPORTED',
        createdAt: new Date().toDateString(),
    },
    {
        id: '5',
        description: 'Spine CT Scan',
        type: 'DICOM',
        status: 'PENDING',
        createdAt: new Date().toDateString(),
    },
    {
        id: '6',
        description: 'Pelvic Ultrasound',
        type: 'EXTERNAL',
        status: 'REPORTED',
        createdAt: new Date().toDateString(),
    },
];

export const Patient = () => {
    const { patientId } = useParams();

    return (
        <main className="p-8 space-y-8">
            <PatientBreadcrumb />
            <PatientProfile patientId={patientId as string} />
            <div className="grid grid-cols-[715px_1fr] gap-8">
                <div className="space-y-8">
                    <PersonalInformation />
                    <ExamHistoryTable data={examsMock} />
                </div>

                <div className="space-y-8">
                    <GeneratePortalAccess />
                    <ClinicalNotes />
                </div>
            </div>
        </main>
    );
};
