import SessionConfirmation from "@/screens/SessionConfirmation";
import SessionScreen from "@/screens/SessionScreen";
import { Header } from "@components/components";
import COLORS from "@constants/COLORS";
import ROUTES from "@constants/ROUTES";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/HomeScreen";
const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        navigationBarColor: COLORS.backgroundColor,
      }}
    >
      <Stack.Screen
        name={ROUTES.HOME_SCREEN}
        component={HomeScreen}
        options={{
          header: () => <Header screen={ROUTES.HOME_SCREEN} />,
          headerShown: true,
        }}
      />
      <Stack.Screen name={ROUTES.SESSIONS_SCREEN} component={SessionScreen} />
      <Stack.Screen
        name={ROUTES.SESSION_CONFIRMATION_SCREEN}
        component={SessionConfirmation}
      />
    </Stack.Navigator>
  );
}
