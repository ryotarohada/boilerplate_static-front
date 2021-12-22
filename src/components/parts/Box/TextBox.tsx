import { Box, BoxProps } from '@chakra-ui/react';

type Props = {
  text: string;
} & BoxProps;

export const TextBox: React.FC<Props> = ({
  text,
  padding = 20,
  margin = 30,
  backgroundColor = 'grey.100',
  fontSize = '1.6rem',
  borderRadius = '10px',
}) => (
  <Box p={padding} m={margin} bg={backgroundColor} fontSize={fontSize} borderRadius={borderRadius}>
    {text}
  </Box>
);
