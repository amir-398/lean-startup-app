import COLORS from "@constants/COLORS";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import "@utils/fontAwesomeConfig";
import "expo-dev-client";
import React from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import "./src/global.css";
import AppNavigation from "./src/navigation/AppNavigation";

const queryClient = new QueryClient();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.backgroundColor,
      text: COLORS.textColor,
      navigationBarColor: "red",
      statusBarColor: "white",
    },
  };

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer theme={MyTheme}>
          <KeyboardProvider navigationBarTranslucent={true}>
            <AppNavigation />
          </KeyboardProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
