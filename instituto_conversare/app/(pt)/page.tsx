import Landing from '@/components/Landing';
import { metadataFor } from '@/lib/meta';

export const metadata = metadataFor('pt');

export default function Page() {
  return <Landing lang="pt" />;
}
