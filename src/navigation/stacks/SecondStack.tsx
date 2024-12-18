import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from "@constants/ROUTES";
import SecondScreen from "@screens/SecondScreen";
import { Header } from "@components/components";
import COLORS from "@constants/COLORS";
const Stack = createNativeStackNavigator();
export default function SecondStack() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.secondScreen}
      screenOptions={{
        headerShown: false,
        navigationBarColor: COLORS.backgroundColor,
      }}
    >
      <Stack.Screen
        name={ROUTES.homeScreen}
        component={SecondScreen}
        options={{
          header: () => <Header screen={ROUTES.homeScreen} />,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
