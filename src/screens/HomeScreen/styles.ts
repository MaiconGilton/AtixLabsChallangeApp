import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

const shadowStyle = {
  elevation: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 1,
}

export const createStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      color: theme.primaryTextColor
    },
    btn: {
      borderColor: theme.secondaryTextColor,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    btnLabel: {
      textAlign: 'center',
      fontSize: 16,
      color: theme.secondaryTextColor
    },
    arrowForwardIcon: {
      fill: theme.secondaryTextColor,
      width: 20,
      height: 20,
      marginLeft: 'auto'
    },
    addBtn: {
      backgroundColor: theme.primaryColor,
      position: 'absolute',
      bottom: 20,
      right: 20,
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9,
      ...shadowStyle
    },
    uploadIcon: {
      fill: 'white',
      zIndex: 9
    },
    btnPng: {
      position: 'absolute',
      bottom: -70,
      right: 20,
      borderRadius: 30,
      height: 60,
      width: 60,
      justifyContent: 'center',
      alignItems: 'center'
    },
    btnCsv: {
      position: 'absolute',
      bottom: -70,
      right: 20,
      borderRadius: 30,
      height: 60,
      width: 60,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });
};
