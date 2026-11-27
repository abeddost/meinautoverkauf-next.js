import ServiceLandingPage, { buildServiceLandingMetadata } from '@/components/ServiceLandingPage';
import { SERVICE_LANDING_BY_PATH } from '@/lib/serviceLandingContent';

const CONTENT = SERVICE_LANDING_BY_PATH['/auto-in-zahlung-geben'];

export const metadata = buildServiceLandingMetadata(CONTENT);

export default function AutoInZahlungGebenPage() {
  return <ServiceLandingPage content={CONTENT} />;
}
