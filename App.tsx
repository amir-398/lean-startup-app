import COLORS from "@constants/COLORS";
import { useReactQueryDevTools } from "@dev-plugins/react-query";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import "@utils/fontAwesomeConfig";
import "expo-dev-client";

import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import "./src/global.css";
import AppNavigation from "./src/navigation/AppNavigation";
const queryClient = new QueryClient();
export default function App() {
  useReactQueryDevTools(queryClient as any);

  let [fontsLoaded, fontError] = useFonts({
    montserratRegular: Montserrat_400Regular,
    montserratMedium: Montserrat_500Medium,
    montserratSemiBold: Montserrat_600SemiBold,
    montserratBold: Montserrat_700Bold,
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
