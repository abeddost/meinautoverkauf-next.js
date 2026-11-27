import ServiceLandingPage, { buildServiceLandingMetadata } from '@/components/ServiceLandingPage';
import { SERVICE_LANDING_BY_PATH } from '@/lib/serviceLandingContent';

const CONTENT = SERVICE_LANDING_BY_PATH['/youngtimer-verkaufen'];

export const metadata = buildServiceLandingMetadata(CONTENT);

export default function YoungtimerVerkaufenPage() {
  return <ServiceLandingPage content={CONTENT} />;
}
