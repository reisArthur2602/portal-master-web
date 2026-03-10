import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { DashboardLayout } from '../components/shared/dashboard-layout';
import { CreateExam } from './app/create-exam';
import { CreatePatient } from './app/create-patient';
import { Exam } from './app/exam';
import { Members } from './app/members';
import { Patient } from './app/patient';
import { Patients } from './app/patients';
import SignIn from './app/sign-in';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* PUBLIC */}
                <Route path="/sign-in" element={<SignIn />} />

                {/* PRIVATE (com layout) */}
                <Route path="/app" element={<DashboardLayout />}>
                    <Route index element={<Navigate to="/app/patients" replace />} />
                    <Route path="patients" element={<Patients />} />
                    <Route path="create-patient" element={<CreatePatient />} />
                    <Route path="patients/:patientId" element={<Patient />} />
                    <Route path="members" element={<Members />} />
                    <Route path="exam/:examId" element={<Exam />} />
                    <Route path="create-exam/:patientId" element={<CreateExam />} />
                </Route>

                {/* FALLBACK */}
                <Route path="*" element={<Navigate to="/sign-in" replace />} />
            </Routes>
        </BrowserRouter>
    );
}
