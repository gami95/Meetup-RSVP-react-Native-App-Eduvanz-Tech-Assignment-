import {DefaultTheme} from '@react-navigation/native';
import {COLOR_THEME} from '../styles/color.style';
export const NoCodeAppTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary:COLOR_THEME.SECONDARY,
    background:COLOR_THEME.PRIMARY,
    card:"white",
    text: 'rgb(164, 164, 164)',
    border: COLOR_THEME.SECONDARY,
  },
};
export const THEME_colors = {
  FONT_SIZE_SMALL: 14,
  FONT_SIZE_MEDIUM: 16,
  FONT_SIZE_MEDIUM1: 14,
  FONT_SIZE_LARGE: 20,
  PRIMARY_COLOR:COLOR_THEME.PRIMARY,
  SECONDARY_COLOR: COLOR_THEME.SECONDARY,
  TERITARY_COLOR: 'rgb(153, 153, 153)',
  FONT_COLOR: 'rgb(164, 164, 164)',
  FONT_WEIGHT_LIGHT: 13,
  FONT_WEIGHT_MEDIUM: 16,
  FONT_WEIGHT_HEAVY: 18,
  ICON_SIZE_HOME: 40,
  ICON_BOTTOM_SIZE: 30,
  ICON_PLACEHOLDER_SIZE:25,
  Default_COLOR: 'black',
  FADEOUT_COLOR:"#696969",
 
};

export const APPComponent_COLOR={
  Default_COLOR: COLOR_THEME.PRIMARY==='#f8f8ff'?'black':'white',
  CATEGORY_COLOR:COLOR_THEME.PRIMARY==='#f8f8ff'?'white':'#4C4B4B',
  PROFILEBACKGROUND_COLOR:COLOR_THEME.PRIMARY==='#f8f8ff'?'#f8f8ff':'rgb(35,35,35)',
};


export const DEFAULT_HEADERS_PAGE = {
  headerTitleStyle: {
    fontWeight: 'bold',
    color: THEME_colors.SECONDARY_COLOR,
  },
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: THEME_colors.PRIMARY_COLOR,
  },
};
