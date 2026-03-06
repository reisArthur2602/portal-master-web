import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { LucideSlash } from 'lucide-react';
import { Link } from 'react-router';

import { Badge } from '@/components/ui/badge';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

type MembersTableProps = {
    data: User[];
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

export const getRoleBadge = (role: UserRole) => {
    switch (role) {
        case 'Admin':
            return <Badge >Admin</Badge>;

        case 'Medical Staff':
            return <Badge>Medical Staff</Badge>;

        case 'Staff':
            return <Badge>Staff</Badge>;

        default:
            return <Badge >{role}</Badge>;
    }
};

export const MembersTable = ({ data }: MembersTableProps) => {
    return (
        <div className="overflow-hidden border rounded-2xl bg-white">
            <Table>
                <TableHeader className="bg-[#F8FAFC]">
                    <TableRow className="*:text-xs *:font-bold *:text-muted-foreground *:py-4 *:px-6 ">
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((member) => (
                        <TableRow className="*:py-4 *:px-6 *:font-semibold bg-white">
                            <TableCell>{member.name}</TableCell>
                            <TableCell>{member.email}</TableCell>
                            <TableCell>
                                <Badge>{getRoleBadge(member.role)}</Badge>
                            </TableCell>

                            <TableCell className="flex items-center gap-2 font-semibold text-sm justify-end ">
                                <Link to="" className="text-primary">
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
                            Showing 1 to 5 of 1,284 members
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
