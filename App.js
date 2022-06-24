import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/main/home";
import Edit from "./src/screens/main/edit";
import Create from "./src/screens/main/create";
import Signin from "./src/screens/auth/signin";
import Signup from "./src/screens/auth/signup";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";

const Stack = createStackNavigator();

// const Stack = createNativeStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function App() {
  const user = false;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: "Profile",
                ...TransitionPresets.SlideFromRightIOS,
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}
            />
            <Stack.Screen
              name="Edit"
              component={Edit}
              options={{
                title: "Profile",
                ...TransitionPresets.SlideFromRightIOS,
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}
            />
            <Stack.Screen
              name="Create"
              component={Create}
              options={{
                title: "Profile",
                ...TransitionPresets.SlideFromRightIOS,
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{
                title: "Profile",
                ...TransitionPresets.SlideFromRightIOS,
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                title: "Profile",
                ...TransitionPresets.SlideFromRightIOS,
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
