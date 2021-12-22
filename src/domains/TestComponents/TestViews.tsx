import { Flex, Spacer } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { LinksView } from '@/domains/TestComponents/TestLinksView';
import { MetaView } from '@/domains/TestComponents/TestMetaView';
import { AsideBox } from '../../components/parts/AsideBox/AsideBox';
import { ApiCallView } from './TestApiCallView';
import { SEO } from '@/types';

type Props = {
  meta: SEO.Change;
  fetchType: 'swr' | 'graphql';
  endpoint: string;
};

const style = css`
  width: 100%;
  height: calc(100vh - 120px);
`;

/**
 * テスト表示用のコンポーネント
 */
export const TestViews: React.FC<Props> = ({ meta, fetchType, endpoint }) => (
  <Flex>
    <AsideBox />
    <Spacer />
    <div css={style}>
      <MetaView meta={meta} />
      <ApiCallView fetchType={fetchType} endpoint={endpoint} />
      <LinksView />
    </div>
  </Flex>
);
