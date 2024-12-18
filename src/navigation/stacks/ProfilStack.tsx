import COLORS from "@constants/COLORS";
import ROUTES from "@constants/ROUTES";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilScreen from "@screens/ProfilScreen";
const Stack = createNativeStackNavigator();
export default function ProfilStack() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.PROFIL_SCREEN}
      screenOptions={{
        headerShown: false,
        navigationBarColor: COLORS.backgroundColor,
      }}
    >
      <Stack.Screen name={ROUTES.PROFIL_SCREEN} component={ProfilScreen} />
    </Stack.Navigator>
  );
}
