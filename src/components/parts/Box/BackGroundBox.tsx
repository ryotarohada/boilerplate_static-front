import { Box, BoxProps } from '@chakra-ui/react';

export const BackGroundBox: React.FC<BoxProps> = ({
  children,
  padding = 20,
  margin = 30,
  backgroundColor = 'grey.100',
  fontSize = '1.6rem',
  borderRadius = '10px',
}) => (
  <Box p={padding} m={margin} bg={backgroundColor} fontSize={fontSize} borderRadius={borderRadius}>
    {children}
  </Box>
);
