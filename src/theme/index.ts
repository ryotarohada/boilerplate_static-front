import { extendTheme } from '@chakra-ui/react';

const defaultFontFamily = `"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;`;
const DEFAULT_BACE_SPACE = 0.1;
const DEFAULT_MAX_SPACE = 100;
const generateDefaultSpaceValues = (baseSpace: number, max: number) => {
  const _spaceObj: { [key: number]: string } = {};
  for (let i = 0; i <= max; i++) {
    _spaceObj[i] = `${Math.round(i * baseSpace * 10) / 10}rem`;
  }
  return _spaceObj;
};

export const customTheme = extendTheme({
  fonts: {
    body: defaultFontFamily,
    heading: defaultFontFamily,
    mono: defaultFontFamily,
  },
  colors: {
    grey: {
      100: '#EDF2F7',
    },
    success: 'green',
    error: 'red',
  },
  space: generateDefaultSpaceValues(DEFAULT_BACE_SPACE, DEFAULT_MAX_SPACE),
});
