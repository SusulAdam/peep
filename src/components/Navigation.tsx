import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, LoginScreen, AllEmployess } from "../screen";

const Tab = createBottomTabNavigator();

function Tabs(): JSX.Element {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={AllEmployess} />
    </Tab.Navigator>
  );
}

const StackApp = createNativeStackNavigator();

const navOptionHandle = (): { headerShown: boolean } => ({
  headerShown: false,
});

function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen
          name="Login"
          component={LoginScreen}
          options={navOptionHandle}
        />
        <StackApp.Screen
          name="Tabs"
          component={Tabs}
          options={navOptionHandle}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}

export { Navigation };
