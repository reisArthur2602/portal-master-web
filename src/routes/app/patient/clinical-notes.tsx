import { Heading } from '@/components/shared/heading';
import { Button } from '@/components/ui/button';
import { File, Plus } from 'lucide-react';

const RowNotes = () => {
    return (
        <div className="bg-[#F5F5F8] border-l-4 border-l-primary rounded-xs space-y-1">
            <div className="p-3">
                <div className="tracking-wider text-xs text-muted-foreground">
                    Oct 20, 2023 • Dr. Sarah Jenkins
                </div>
                <p className="text-foreground">
                    Patient reports mild chest discomfort during exertion. Scheduled X-Ray.
                </p>
            </div>
        </div>
    );
};

export const ClinicalNotes = () => {
    return (
        <div className="bg-white rounded-2xl border p-6 space-y-3">
            <div className="flex items-center justify-between">
                <Heading title="Clinical Notes" icon={File} />
                <Button variant="secondary">
                    <Plus /> Adicionar
                </Button>
            </div>
            <RowNotes />
            <RowNotes />
            <RowNotes />
        </div>
    );
};
