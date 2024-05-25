// app/dashboard/layout.tsx

import Sidebar from "@/components/sidebar";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="pl-[38px]">
      <Sidebar/>
        <main className="flex">
          {children}
        </main>
    </div>
  );
}