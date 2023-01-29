import { extendTheme } from '@chakra-ui/react';

const chakraThemeConfig = () => {
  const chakraTheme = extendTheme({
    colors: {
      brand: {
        primary: '#7A79FD',
        'dark-bg': '#302B53',
      },
    },
  });

  return chakraTheme;
};

export default chakraThemeConfig;
