import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

export const createStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    img: {
      width: '50%',
      height: 150,
      borderWidth: 0.5,
      borderColor: theme.secondaryTextColor
    }
  })
}
