import React from 'react';
import { Platform, SafeAreaView, StatusBar, View } from 'react-native';
import useTheme from './hooks/useTheme';
import Navigator from './screens/Navigator';

const App = () => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar barStyle='light-content' backgroundColor={theme.primaryColor} />

      {/* force statusbar backgroundColor on ios */}
      {Platform.OS === 'ios' &&
        <View style={{
          width: "100%",
          height: 100,
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: theme.primaryColor
        }}
        />
      }

      <Navigator />
    </SafeAreaView>
  );
};

export default App;
