import { Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';

type Props = {
  siteTitle: string;
};

const headerStyle = css`
  width: 100%;
  height: 70px;
  padding: 0px 50px;
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 16px -6px rgba(0, 0, 0, 0.2);
`;

export const Header: React.FC<Props> = ({ siteTitle }) => (
  <header css={headerStyle}>
    <Heading lineHeight="1em">{siteTitle}</Heading>
  </header>
);
