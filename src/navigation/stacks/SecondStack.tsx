import { Header } from "@components/components";
import COLORS from "@constants/COLORS";
import ROUTES from "@constants/ROUTES";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondScreen from "@screens/SecondScreen";
const Stack = createNativeStackNavigator();
export default function SecondStack() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.EVENTS_SCREEN}
      screenOptions={{
        headerShown: false,
        navigationBarColor: COLORS.backgroundColor,
      }}
    >
      <Stack.Screen
        name={ROUTES.EVENTS_SCREEN}
        component={SecondScreen}
        options={{
          header: () => <Header screen={ROUTES.homeScreen} />,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
