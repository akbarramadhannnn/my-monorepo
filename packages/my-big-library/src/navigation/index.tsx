import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Detail } from "../screens";

const Stack = createStackNavigator();

export const MyLibraryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
