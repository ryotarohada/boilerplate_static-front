import { BackGroundBox } from '@/components/parts/Box/BackGroundBox';
import { SEO } from '@/types';

/**
 *メタデータ表示用のテストコンポーネント
 */

type Props = {
  meta: SEO.Change;
};

export const MetaView: React.FC<Props> = ({ meta: { title, description } }) => (
  <BackGroundBox>
    <h2>【メタデータ】</h2>
    <p>title: {title}</p>
    <p>description: {description}</p>
  </BackGroundBox>
);
