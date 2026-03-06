import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { FileIcon, LucideSlash } from 'lucide-react';
import { Link } from 'react-router';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

type PatientsTableProps = {
    data: Patient[];
};

const ExamCountBadge = ({ count }: { count: number }) => {
    return (
        <div className="bg-primary/10 text-primary gap-1.5 flex items-center px-2 py-1.5 rounded-full w-fit">
            <FileIcon className="size-4" />
            <div className="text-xs font-bold">{count} Exams</div>
        </div>
    );
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

export const PatientsTable = ({ data }: PatientsTableProps) => {
    return (
        <div className="overflow-hidden border rounded-2xl bg-white">
            <Table>
                <TableHeader className="bg-[#F8FAFC]">
                    <TableRow className="*:text-xs *:font-bold *:text-muted-foreground *:py-4 *:px-6 ">
                        <TableHead>Patient Name</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>CPF</TableHead>
                        <TableHead>Exam count</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((patient) => (
                        <TableRow className="*:py-4 *:px-6 *:font-semibold bg-white">
                            <TableCell>{patient.name}</TableCell>
                            <TableCell>{patient.phone}</TableCell>
                            <TableCell>{patient.cpf}</TableCell>
                            <TableCell>
                                <ExamCountBadge count={patient.examsCount || 0} />
                            </TableCell>
                            <TableCell className="flex items-center gap-2 font-semibold text-sm justify-end ">
                                <Link to={`/app/patients/${patient.id}`} className="text-primary">
                                    View
                                </Link>
                                <LucideSlash className="text-muted-foreground/40 -rotate-45 size-4" />
                                <Link to="">Edit</Link>
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
