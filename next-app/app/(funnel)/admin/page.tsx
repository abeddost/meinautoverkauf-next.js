import type { Metadata } from 'next';
import AdminDashboard from '@/page-components/AdminDashboard';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Administrator dashboard',
  robots: { index: false, follow: false },
};

export default function AdminRoute() {
  return <AdminDashboard />;
}
