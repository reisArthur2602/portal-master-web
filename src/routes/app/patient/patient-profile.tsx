import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import { Pen, PlusCircle } from 'lucide-react';
import { Link } from 'react-router';

const PatientAvatar = () => {
    return (
        <Avatar className="size-24">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
    );
};

export const PatientProfile = ({ patientId }: { patientId: string }) => {
    return (
        <div className="bg-white p-6 flex items-center justify-between rounded-2xl border">
            <div className="flex items-center gap-6">
                <PatientAvatar />
                <span className="text-2xl font-bold">Johnathan Doe</span>
            </div>
            <div className="flex items-center gap-3">
                <Button variant="secondary">
                    <Pen /> Edit Profile
                </Button>
                <Link to={`/app/create-exam/${patientId}`} className={buttonVariants()}>
                    <PlusCircle />
                    New Exam
                </Link>
            </div>
        </div>
    );
};
