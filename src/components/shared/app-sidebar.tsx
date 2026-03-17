import { Settings, UserRoundCog, Users } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { Logo } from "./logo";
import { useQuery } from "@tanstack/react-query";
import { profile } from "@/http/profile";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/auth";
import { ACCESS_TOKEN_VALUE } from "@/constants";

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
        ${isActive ? "bg-primary/10 text-primary" : "hover:bg-primary/10 hover:text-primary"}`
      }
    >
      <Icon className="size-4" />
      {label}
    </NavLink>
  );
};

export const AppSidebar = () => {
  const navigate = useNavigate();
  const { setUser, user, logout } = useAuthStore();
  const [hasToken, setHasToken] = useState<boolean | null>(null);

  const checkToken = async () => {
    try {
      const token = await cookieStore.get(ACCESS_TOKEN_VALUE);

      if (!token?.value) {
        logout();
        setHasToken(false);
        navigate("/sign-in", { replace: true });
        return;
      }

      setHasToken(true);
    } catch {
      logout();
      setHasToken(false);
      navigate("/sign-in", { replace: true });
    }
  };

  useEffect(() => {
    checkToken();
  }, [navigate, logout]);

  const { data } = useQuery({
    queryKey: ["user-session"],
    queryFn: profile,
    enabled: Boolean(hasToken),
    retry: false,
  });

  useEffect(() => {
    if (data?.user) setUser(data.user);
  }, [data, setUser]);

  return (
    <aside className="flex flex-col border-r bg-white">
      <header className="p-4 border-b">
        <Logo />
      </header>

      <nav className="p-4 flex flex-col gap-1.5">
        <NavItens to="/app/patients" label="Pacientes" icon={Users} />
        <NavItens to="/app/members" label="Equipe" icon={UserRoundCog} />
        <NavItens to="/app/settings" label="Configurações" icon={Settings} />
      </nav>

      <footer className="p-4 mt-auto text-sm text-muted-foreground">
        {user ? user.name : "Usuário"}
      </footer>
    </aside>
  );
};
