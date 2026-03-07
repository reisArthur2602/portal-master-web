import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router';

const PatientAvatar = () => {
    return (
        <Avatar className="size-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
    );
};

export const PatientInfo = ({ patientId }: { patientId: string }) => {
    return (
        <div className="bg-primary rounded-2xl p-6 grid gap-4 text-white/70">
            <span className="font-bold uppercase tracking-wider text-sm">Patient Profile</span>
            <div className="flex items-center gap-6">
                <PatientAvatar />
                <div>
                    <div className="text-white text-xl font-bold">John Doe</div>
                    <div className="text-sm ">45 years old, Male</div>
                </div>
            </div>
            <div className="sapce-y-3 text-xs">
                <div className="flex items-center justify-between py-2">
                    <span>Primary Care</span>
                    <span className="font-bold text-white">Dr. Whittaker</span>
                </div>
                <div className="flex items-center justify-between py-2">
                    <span>Last Visit</span>
                    <span className="font-bold text-white">2 weeks ago</span>
                </div>
            </div>
            <Link to="/app/patients" className={buttonVariants({ variant: `secondary` })}>
                View Full Record
            </Link>
        </div>
    );
};
