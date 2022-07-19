import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PngListScreen from './PngListScreen';
import CsvListScreen from './CsvListScreen';
import HomeScreen from './HomeScreen';
import useTheme from '../hooks/useTheme';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const themeColors = useTheme()

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: themeColors.background,
        }
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: themeColors.primaryColor },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Atix Labs Challange App' }}
        />

        <Stack.Screen
          name="PngListScreen"
          component={PngListScreen}
          options={{ title: 'PNG Gallery' }}
        />

        <Stack.Screen
          name="CsvListScreen"
          component={CsvListScreen}
          options={{ title: 'CSV Sheets' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
