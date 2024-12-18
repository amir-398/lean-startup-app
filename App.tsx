import {
  Poppins_300Light,
  Poppins_400MRegular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import "expo-dev-client";
import COLORS from "@constants/COLORS";
import AppNavigation from "./src/navigation/AppNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { QueryClient, QueryClientProvider } from "react-query";
import "@utils/fontAwesomeConfig";
import "./src/global.css";
const queryClient = new QueryClient();
export default function App() {
  useReactQueryDevTools(queryClient);

  let [fontsLoaded, fontError] = useFonts({
    poppinsLight: Poppins_300Light,
    poppinsMedium: Poppins_500Medium,
    poppinsSemiBold: Poppins_600SemiBold,
    poppinsBold: Poppins_700Bold,
    poppinsRegular: Poppins_400MRegular,
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
      statusBarColor: "red",
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
