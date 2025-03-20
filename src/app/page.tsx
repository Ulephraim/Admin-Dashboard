/** @format */

import { Dashboard } from '@/components/dashboard/Dashboard';
import { Sidebar } from '@/components/sidebar/Sidebar';

export default function Home() {
  return (
    <main className="grid gap-4 p-4 h-screen grid-cols-[220px_1fr]">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
