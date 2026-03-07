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

import { Button, buttonVariants } from '@/components/ui/button';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import { Link } from 'react-router';

type ExamHistoryTableProps = {
    data: Exam[];
};

const DownloadExamButton = () => {
    return <Button variant="link">Download</Button>;
};

const ViewDetailsButton = ({ examId }: { examId: string }) => {
    return (
        <Link
            to={`/app/exam/${examId}`}
            className={cn(
                'text-muted-foreground',
                buttonVariants({ variant: 'link', className: 'text-muted-foreground' })
            )}
        >
            View Details
        </Link>
    );
};

const getActionButton = (type: ExamType) => {
    switch (type) {
        case 'DICOM':
            return <DownloadExamButton />;
        case 'EXTERNAL':
            return <ViewDetailsButton examId="ID: #PX-88231" />;
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
        <div className="border rounded-2xl bg-white">
            <Table className="table-fixed w-full">
                <TableHeader className="bg-[#F8FAFC]">
                    <TableRow className="*:text-xs *:font-bold *:text-muted-foreground *:py-4 *:px-6">
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

                            <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-2">
                                    {getActionButton(exam.type)}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

                <TableFooter>
                    <TableRow className="bg-white">
                        <TableCell className="text-xs text-muted-foreground px-6 py-4" colSpan={3}>
                            Showing 1 to 5 of 1,284 patients
                        </TableCell>

                        <TableCell>
                            <PaginationTable />
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
};
