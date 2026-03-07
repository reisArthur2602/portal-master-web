import { Heading } from '@/components/shared/heading';
import { LucideInfo } from 'lucide-react';

const Cell = ({ title, value }: { title: string; value: string }) => {
    return (
        <div className="font-medium w-full">
            <div className="text-muted-foreground text-xs tracking-wide font-semibold">{title}</div>
            <div className="font-medium text-foreground">{value}</div>
        </div>
    );
};

export const ExamInfo = () => {
    return (
        <div className="bg-white border rounded-2xl p-6 sapce-y-6">
            <Heading title="Exam Specifics" icon={LucideInfo} />

            <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 ">
                    <Cell title="Date of Exam" value="October 24, 2023, 09:15 AM" />
                    <Cell title="Requesting Physician" value="123.456.789-00" />
                </div>
                <div className="grid grid-cols-2 ">
                    <Cell title="Status" value="Report Available" />
                    <Cell title="Report Available" value="Dr. Sarah Whittaker" />
                </div>

                <Cell
                    title="Initial Observations"
                    value="Patient reports intermittent palpitations and chest tightness during mild exercise. Heart rate appears within normal range at rest, but shows significant spikes during physical activity recorded in pre-exam assessment."
                />
            </div>
        </div>
    );
};
