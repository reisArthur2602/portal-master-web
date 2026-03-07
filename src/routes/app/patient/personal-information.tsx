import { Heading } from '@/components/shared/heading';
import { User } from 'lucide-react';

const Cell = ({ title, value }: { title: string; value: string }) => {
    return (
        <div className="font-medium">
            <div className="text-muted-foreground text-xs tracking-wide font-semibold">{title}</div>
            <div className="font-medium text-foreground">{value}</div>
        </div>
    );
};

export const PersonalInformation = () => {
    return (
        <div className="bg-white border rounded-2xl">
            <header className="border-b px-6 py-4">
                <Heading title="Personal Information" icon={User} />
            </header>

            <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 ">
                    <Cell title="Full Name" value="Johnathan Doe Richards" />
                    <Cell title="CPF / National ID" value="123.456.789-00" />
                </div>
                <div className="grid grid-cols-2 ">
                    <Cell title="Date of Birth" value="May 14, 1985 (38 years)" />
                    <Cell title="Phone Number" value="+1 (555) 000-1234" />
                </div>
                <div className="grid grid-cols-2 ">
                    <Cell title="Email Address" value="j.doe.richards@example.com" />
                    <Cell title="Gender" value="Male" />
                </div>
                <Cell
                    title="Residential Address"
                    value="742 Evergreen Terrace, Springfield, IL 62704, USA"
                />
            </div>
        </div>
    );
};
