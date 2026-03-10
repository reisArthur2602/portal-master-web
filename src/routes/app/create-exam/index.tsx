import { useParams } from 'react-router';
import { AlertCreateExam } from './alert-create-exam';
import { CreateExamBreadcrumb } from './create-exam-breadcrumb';
import { ExamForm } from './exam-form';

export const CreateExam = () => {
    const { patientId } = useParams();

    return (
        <main className="p-8 flex flex-col gap-6">
            <CreateExamBreadcrumb patientId={patientId as string} />
            <ExamForm patientId={patientId as string} />
            <AlertCreateExam />
        </main>
    );
};
