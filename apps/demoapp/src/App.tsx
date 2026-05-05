import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  MyLibraryNavigator,
  setConfigureLibrary,
} from '@akbarramadhan/my-big-library';

setConfigureLibrary({
  apiKey: 'ini adalah apikey',
  baseUrl: 'ini adalah baseurl',
  debugMode: false,
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MyLibraryNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
