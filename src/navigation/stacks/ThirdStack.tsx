import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from "@constants/ROUTES";
import ThirdScreen from "@screens/ThirdScreen";
import { Header } from "@components/components";
import COLORS from "@constants/COLORS";
const Stack = createNativeStackNavigator();
export default function ThirdStack() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.thirdScreen}
      screenOptions={{
        headerShown: false,
        navigationBarColor: COLORS.backgroundColor,
      }}
    >
      <Stack.Screen
        name={ROUTES.homeScreen}
        component={ThirdScreen}
        options={{
          header: () => <Header screen={ROUTES.homeScreen} />,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
