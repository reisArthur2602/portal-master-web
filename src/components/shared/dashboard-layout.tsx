import { Outlet } from 'react-router';
import { AppSidebar } from './app-sidebar';

export const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-[256px_1fr] min-h-dvh">
            <AppSidebar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};
