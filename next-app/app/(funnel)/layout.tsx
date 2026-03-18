import ConsentManager from '@/components/ConsentManager';

export default function FunnelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 min-h-screen selection:bg-brand-orange selection:text-white">
      {children}
      <ConsentManager />
    </div>
  );
}
