import { Heading } from '@/components/shared/heading';
import { Button } from '@/components/ui/button';
import { Key, Loader2 } from 'lucide-react';

export const GeneratePortalAccess = () => {
    return (
        <div className="border p-6 grid  gap-6 rounded-2xl bg-primary/5 border-primary/20">
            <Heading title="Portal Access" icon={Key} />
            <p>
                Generate a unique activation code to allow the patient to access their reports
                through the online portal.
            </p>
            <div className="bg-white border-dashed border-2 border-primary/30 p-6 rounded-xl space-y-6 font-bold text-center uppercase tracking-widest text-xs text-muted-foreground/50 ">
                <div>Activate code</div>
                <div className="text-primary text-3xl">K8X26</div>
                <div>Expires in 24 hours</div>
            </div>

            <Button size="lg">
                <Loader2 /> Generate New Code
            </Button>
        </div>
    );
};
