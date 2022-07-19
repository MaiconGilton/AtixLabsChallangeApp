import { useColorScheme } from 'react-native';

const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = {
    primaryColor: '#FF004F',
    secondaryColor: '#434343',
    primaryTextColor: '#434343',
    secondaryTextColor: 'grey',
    background: 'white'
  }

  if (isDarkMode) {
    theme.primaryTextColor = '#D1D1D1'
    theme.secondaryColor = '#434343'
    theme.secondaryTextColor = 'lightgrey'
    theme.background = '#434343'
  }

  return theme
}
export default useTheme