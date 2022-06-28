import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/main/home";
import Update from "./src/screens/main/update";
import Create from "./src/screens/main/create";
import Signin from "./src/screens/auth/login";
import Signup from "./src/screens/auth/signup";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "./src/util/firebaseConfig";

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
  const [user, setUser] = useState(null);
  const [loading, setLoading] =useState(true);

  useEffect(() => {
    const authSubscription = onAuthStateChanged(Auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false)
      }
    });

    return authSubscription;
  }, []);

  if(loading){
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
      <ActivityIndicator color="blue" size="large" />
    </View>
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="Home"
              options={{
                headerShown:false,
                ...TransitionPresets.SlideFromRightIOS,
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}
            >
              {(props) => <Home {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen
              name="Update"
              options={{
                title: "Profile",
                ...TransitionPresets.SlideFromRightIOS,
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}
            >
              {(props) => <Update {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen
              name="Create"
              options={{
                title: "Create a note",
                ...TransitionPresets.SlideFromRightIOS,
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}
            >
              {(props)=><Create {...props} user={user} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Signin}
              options={{
                headerShown: false,
                title: "Log In",
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
                title: "Sign up",
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
