/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export default{
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },

  /* paleta geral */
  primary:'#6973FA',
  gray:'#8F8E8F',
  white:'#FFF',
  shadow:'#4b45457d',
  black:'#000',

  /* cards informativos da dashboard */
  graphite:'#41424C',
  darkGray:'#686868',
  silver:'#c0c0c0',
  blue:'#0d6efd',
  darkBlue:'#0847A5',
  gold:'#ffc107',
  darkYellow:'#A87F05',

  /* cards informativos do usuário */
  warning:'#ffc107',
  cash:	'#339900',
  data:'#0dcaf0'
};
