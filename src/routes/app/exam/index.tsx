import { Navigate, useParams } from 'react-router';
import { AttachedReport } from './attached-reports';
import { ExamBreadcrumb } from './exam-breadcrumb';
import { ExamHeader } from './exam-header';
import { ExamInfo } from './exam-info';
import { ExamTimeline } from './exam-timeline';
import { PatientInfo } from './patient-info';

export const Exam = () => {
    const { examId } = useParams();
    if (!examId) return <Navigate to="patient" />;
    return (
        <main className="p-8 space-y-6">
            <ExamBreadcrumb examId={examId} />

            <ExamHeader />

            <div className="grid grid-cols-[2.5fr_1fr] gap-6">
                <aside className="space-y-6">
                    <ExamInfo />
                    <AttachedReport />
                </aside>
                <aside className="space-y-6">
                    <PatientInfo patientId="cacacac" />
                    <ExamTimeline />
                </aside>
            </div>
        </main>
    );
};
