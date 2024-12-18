import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from "@constants/ROUTES";
import HomeScreen from "@screens/HomeScreen";
import { Header } from "@components/components";
import COLORS from "@constants/COLORS";
const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.homeScreen}
      screenOptions={{
        headerShown: false,
        navigationBarColor: COLORS.backgroundColor,
      }}
    >
      <Stack.Screen
        name={ROUTES.homeScreen}
        component={HomeScreen}
        options={{
          header: () => <Header screen={ROUTES.homeScreen} />,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
