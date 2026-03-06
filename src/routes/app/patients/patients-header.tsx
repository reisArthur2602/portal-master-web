import { buttonVariants } from '@/components/ui/button';
import { Users2 } from 'lucide-react';
import { Link } from 'react-router';
import { PatientSearchInput } from './patient-search-input';

export const PatientsHeader = () => {
    return (
        <header className="bg-white px-8 py-3 flex items-center  justify-between gap-6 border-b">
            <PatientSearchInput />
            <Link
                to="/app/create-patient"
                className={buttonVariants({ variant: 'default', size: 'lg' })}
            >
                <Users2 /> Add New Patient
            </Link>
        </header>
    );
};
