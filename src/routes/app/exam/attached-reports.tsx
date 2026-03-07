import { Heading } from '@/components/shared/heading';
import { Button } from '@/components/ui/button';
import { DownloadCloud, File, Folder, Upload } from 'lucide-react';

const AttachedReportCard = () => {
    return (
        <li className="p-4 border rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-2 text-primary rounded-sm">
                    <File size={18} />
                </div>

                <div className="text-sm">
                    <div className="font-bold ">Holter_Final_Analysis_V2.pdf</div>
                    <div className="text-muted-foreground">Uploaded on Oct 25, 2023 • 2.4 MB</div>
                </div>
            </div>
            <Button size="icon-lg" variant="ghost">
                <DownloadCloud />
            </Button>
        </li>
    );
};

const AttachedReportList = () => {
    return (
        <ul className="flex-col gap-2 flex">
            <AttachedReportCard />
            <AttachedReportCard />
            <AttachedReportCard />
            <AttachedReportCard />
        </ul>
    );
};

export const AttachedReport = () => {
    return (
        <div className="bg-white border rounded-2xl p-6 space-y-6">
            <div className="flex items-center justify-between">
                <Heading title="Attached Reports" icon={Folder} />

                <Button>
                    <Upload /> Attach Report
                </Button>
            </div>
            <AttachedReportList />
        </div>
    );
};
