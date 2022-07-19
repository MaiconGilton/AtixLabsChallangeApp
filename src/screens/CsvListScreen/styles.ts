import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

export const createStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      paddingTop: 20
    },
    btn: {
      borderColor: theme.secondaryTextColor,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      width: '100%'
    },
    itemName: {
      fontSize: 18,
      color: theme.secondaryTextColor,
    },
    itemAmount: {
      fontSize: 16,
      color: theme.secondaryTextColor,
    }
  })
}
