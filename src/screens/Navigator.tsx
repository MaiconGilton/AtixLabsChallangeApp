import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PngListScreen from './PngListScreen';
import CsvListScreen from './CsvListScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="PngListScreen"
          component={PngListScreen}
          options={{ title: 'PNG List' }}
        />

        <Stack.Screen
          name="CsvListScreen"
          component={CsvListScreen}
          options={{ title: 'CSV List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
