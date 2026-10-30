import BrandLoader from '@/components/BrandLoader';

/**
 * Umi convention file: shown while lazy route chunks load.
 */
export default function Loading() {
  return <BrandLoader fullscreen label="Connecting to Security Platform..." />;
}
