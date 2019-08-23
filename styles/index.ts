import { DefaultTheme } from 'react-native-paper';

export const theme = {
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 16,
  PRIMARY_COLOR: 'rgb(21, 212, 170)',
  SECONDARY_COLOR: 'rgb(252, 249, 255)',
  TEXT_COLOR: 'rgb(252, 249, 255)',
  DELETE_COLOR: 'rgb(237, 56, 132)',
  SCREEN_BACKGROUND: 'rgb(56, 56, 56)',
};

export const materialTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.PRIMARY_COLOR,
    secondary: theme.SECONDARY_COLOR,
  },
};
