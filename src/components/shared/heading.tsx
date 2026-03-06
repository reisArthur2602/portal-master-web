import { type LucideIcon } from 'lucide-react';

type HeadingProps = {
    icon: LucideIcon;
    title: string;
};

export const Heading = ({ icon: Icon, title }: HeadingProps) => {
    return (
        <div className="flex items-center gap-2">
            <Icon className="size-5 text-primary" />
            <h4 className="text-xl font-bold">{title}</h4>
        </div>
    );
};
