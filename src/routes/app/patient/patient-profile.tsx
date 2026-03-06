import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Pen, PlusCircle } from 'lucide-react';

const PatientAvatar = () => {
    return (
        <Avatar className="size-[96px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
    );
};

export const PatientProfile = () => {
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
                <Button>
                    <PlusCircle />
                    New Exam
                </Button>
            </div>
        </div>
    );
};
