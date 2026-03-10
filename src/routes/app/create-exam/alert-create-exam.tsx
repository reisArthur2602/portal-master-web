import { Info } from 'lucide-react';

export const AlertCreateExam = () => {
    return (
        <div className="rounded-sm border bg-primary/10 text-primary font-medium text-xs flex items-center gap-3 p-4 border">
            <Info size={20} />
            <div>
                All registered exams are automatically synchronized with the patient's electronic
                health record (EHR) and notified to the assigned clinical team.
            </div>
        </div>
    );
};
