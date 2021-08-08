import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import WeatherScreen from '../Screens/Weather';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WeatherForecastScreen" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
