import { css } from '@emotion/react';
import { Box, VStack } from '@chakra-ui/react';
import { AsideItem } from './AsideItem';
import { myAppUrls } from '@/lib/url';

const AsideContents: React.FC = () => (
  <VStack>
    {myAppUrls.map(({ title, link }) => (
      <AsideItem title={title} link={link} key={title} />
    ))}
  </VStack>
);

const innerStyle = css`
  height: calc(100% - 60px);
  margin: 30px 0;
  border-right: 2px solid #cacaca;
`;

export const AsideBox: React.FC = () => (
  <Box width="350px" height="calc(100vh - 70px)">
    <div css={innerStyle}>
      <AsideContents />
    </div>
  </Box>
);
