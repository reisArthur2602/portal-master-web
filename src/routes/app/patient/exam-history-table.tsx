import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { FileIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

type ExamHistoryTableProps = {
    data: Exam[];
};

const DownloadExamButton = () => {
    return <Button variant="link">Download</Button>;
};

const ViewDetailsButton = () => {
    return (
        <Button variant="link" className="text-muted-foreground">
            View Details
        </Button>
    );
};

const getActionButton = (type: ExamType) => {
    switch (type) {
        case 'DICOM':
            return <DownloadExamButton />;
        case 'EXTERNAL':
            return <ViewDetailsButton />;
        default:
            return null;
    }
};

const ExamStatusBadge = ({ status }: { status: ExamStatus }) => {
    const base = 'gap-1.5 flex items-center px-2 py-1.5 rounded-full w-fit text-xs font-bold';

    switch (status) {
        case 'PENDING':
            return (
                <div className={`${base} bg-yellow-100 text-yellow-700`}>
                    <FileIcon className="size-4" />
                    <div>Pending</div>
                </div>
            );

        case 'REPORTED':
            return (
                <div className={`${base} bg-green-100 text-green-700`}>
                    <FileIcon className="size-4" />
                    <div>Reported</div>
                </div>
            );

        default:
            return null;
    }
};

const PaginationTable = () => {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export const ExamHistoryTable = ({ data }: ExamHistoryTableProps) => {
    return (
        <div className="overflow-hidden border rounded-2xl bg-white">
            <Table>
                <TableHeader className="bg-[#F8FAFC]">
                    <TableRow className="*:text-xs *:font-bold *:text-muted-foreground *:py-4 *:px-6 ">
                        <TableHead>Exam</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.map((exam) => (
                        <TableRow key={exam.id} className="*:py-4 *:px-6 *:font-semibold bg-white">
                            <TableCell>{exam.type}</TableCell>

                            <TableCell>{new Date(exam.createdAt).toDateString()}</TableCell>

                            <TableCell>
                                <ExamStatusBadge status={exam.status} />
                            </TableCell>

                            <TableCell className="flex items-center gap-2 font-semibold text-sm justify-end ">
                                {getActionButton(exam.type)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

                <TableFooter>
                    <TableRow className="bg-white">
                        <TableCell className="text-xs text-muted-foreground px-6 py-4" colSpan={3}>
                            Showing 1 to 5 of 1,284 patients
                        </TableCell>

                        <TableCell colSpan={2}>
                            <PaginationTable />
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
};
