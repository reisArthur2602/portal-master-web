import { Heading } from '@/components/shared/heading';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Heart } from 'lucide-react';
import { useForm } from 'react-hook-form';

type SignInData = {
    email: string;
    password: string;
};

const useSignIn = () => {
    const form = useForm<SignInData>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (data: SignInData) => {
        console.log(data);
    };

    return { form, onSubmit };
};

export const SignInForm = () => {
    const { form, onSubmit } = useSignIn();

    return (
        <div className="max-w-130 overflow-hidden rounded-3xl flex flex-col ">
            {/* HEADER */}
            <div className="bg-linear-to-bl to-blue-800 from-primary px-10 py-20">
                <div className="text-white space-y-2">
                    <h1 className="text-3xl font-heading font-bold">Welcome Back</h1>
                    <p className="text-white/70 text-base">
                        Access your secure medical portal to manage exams, view results, and
                        communicate with your healthcare provider.
                    </p>
                </div>
            </div>

            <div onSubmit={form.handleSubmit(onSubmit)} className="p-10 bg-white space-y-6  gap-6">
                <Heading title="Professional Login" icon={Heart} />
                <Form {...form}>
                    <form className="grid gap-5">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="your@email.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* PASSWORD */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* BUTTON */}
                        <Button size="lg">Sign In</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};
