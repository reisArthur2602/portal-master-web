import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export const CreateExamBreadcrumb = ({ patientId }: { patientId: string }) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/app/patients">Pacientes</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{patientId}</BreadcrumbPage>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                    <BreadcrumbPage>Exame</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
};
