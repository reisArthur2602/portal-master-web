import { Heading } from '@/components/shared/heading';
import { Button, buttonVariants } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FileChartColumn } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const useExamForm = () => {
    const form = useForm();
    return { form };
};

export const ExamForm = ({ patientId }: { patientId: string }) => {
    const isEditing = Boolean(patientId);
    console.log(isEditing);
    const { form } = useExamForm();
    return (
        <Form {...form}>
            <form className="grid gap-6 p-8 bg-white border rounded-2xl ">
                <Heading title="Examination Details" icon={FileChartColumn} />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Exam Date</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="initialObservation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Initial Observations & Clinical History</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Mention any specific symptoms, previous findings, or special instructions for the technician..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex items-center justify-end gap-3">
                    <Link to="/app/patients" className={buttonVariants({ variant: 'outline' })}>
                        Cancelar
                    </Link>

                    <Button>Save Exam</Button>
                </div>
            </form>
        </Form>
    );
};
