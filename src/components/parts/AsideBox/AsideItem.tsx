import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Button, ButtonProps } from '@chakra-ui/react';
import { DevContexts } from '@/types';

type Props = Omit<DevContexts.PageData, 'description'> & ButtonProps;

export const AsideItem: React.FC<Props> = ({
  title,
  link,
  width = '80%',
  fontSize = '1.6rem',
  px = 0,
  py = 20,
  colorScheme = 'teal',
  ...rest
}) => {
  const { pathname, push } = useRouter();
  const variantType = pathname === link ? 'solid' : 'outline';
  const handleClick = useCallback(() => push(link), [push, link]);

  return (
    <Button
      width={width}
      fontSize={fontSize}
      px={px}
      py={py}
      colorScheme={colorScheme}
      variant={variantType}
      onClick={handleClick}
      key={title}
      {...rest}
    >
      {title}
    </Button>
  );
};
