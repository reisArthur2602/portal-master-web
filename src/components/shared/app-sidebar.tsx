import { UserRoundCog, Users } from 'lucide-react';
import { NavLink } from 'react-router';

type NavItemProps = {
    to: string;
    label: string;
    icon: React.ElementType;
};

export const NavItens = ({ to, label, icon: Icon }: NavItemProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-3 text-muted-foreground py-3 px-4 font-medium rounded-sm text-sm transition-colors
        ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted/60 hover:text-foreground'}`
            }
        >
            <Icon className="size-4" />
            {label}
        </NavLink>
    );
};

export const AppSidebar = () => {
    return (
        <aside className="flex flex-col border-r bg-white">
            <header className="p-4 font-semibold">Portal</header>

            <nav className="p-4 flex flex-col gap-3">
                <NavItens to="/app/patients" label="Pacientes" icon={Users} />
                <NavItens to="/app/members" label="Membros" icon={UserRoundCog} />
            </nav>

            <footer className="p-4 mt-auto text-sm text-muted-foreground">Usuário</footer>
        </aside>
    );
};
