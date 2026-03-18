import type { Metadata } from 'next';
import AdminLoginPage from '@/page-components/AdminLoginPage';

export const metadata: Metadata = {
  title: 'Admin Login',
  description: 'Administrator login',
  robots: { index: false, follow: false },
};

export default function AdminLoginRoute() {
  return <AdminLoginPage />;
}
