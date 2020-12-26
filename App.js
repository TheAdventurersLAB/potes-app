import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

const Stack = createStackNavigator();

import {
  StatusBar,
  Text,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Landing"
          component={LandingPage}
        />
        <Stack.Screen
          name="Main"
          component={MainPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
