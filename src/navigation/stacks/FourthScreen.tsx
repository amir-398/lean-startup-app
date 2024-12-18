import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from "@constants/ROUTES";
import FourthScreen from "@screens/FourthScreen";
import { Header } from "@components/components";
import COLORS from "@constants/COLORS";
const Stack = createNativeStackNavigator();
export default function FourthStack() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.fourthScreen}
      screenOptions={{
        headerShown: false,
        navigationBarColor: COLORS.backgroundColor,
      }}
    >
      <Stack.Screen
        name={ROUTES.homeScreen}
        component={FourthScreen}
        options={{
          header: () => <Header screen={ROUTES.homeScreen} />,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
