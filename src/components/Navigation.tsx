import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { HomeScreen, LoginScreen, AllEmployess } from "../screen";
import { COLORS } from "../constans/theme";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Tabs(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS["violet-dark_2"],
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={30}
              color={focused ? COLORS.violet : COLORS["violet-dark"]}
            />
          ),
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: focused ? COLORS.white : COLORS.grey_1,
                }}
              >
                Home
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="AllEmployess"
        component={AllEmployess}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="people"
              size={30}
              color={focused ? COLORS.violet : COLORS["violet-dark"]}
            />
          ),
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: focused ? COLORS.white : COLORS.grey_1,
                }}
              >
                All employess
              </Text>
            );
          },
        }}
      />
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
