import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from "@constants/COLORS";
import HomeStack from "./stacks/HomeStack";
import ROUTES from "@/constants/ROUTES";
import FONTS from "@constants/FONTS";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { getActiveScreen } from "@/utils/routes";
import SecondStack from "./stacks/SecondStack";
import ThirdStack from "./stacks/ThirdStack";
import FourthStack from "./stacks/FourthScreen";

const Tab = createBottomTabNavigator();
const hideTabBarScreens = [];

export default function MainNavigation() {
  const { currentRouteName } = getActiveScreen();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === ROUTES.homeScreen) {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Communauté") {
            iconName = focused ? "user-group" : "user-group";
          } else if (route.name === "Mes soirées") {
            iconName = focused ? "champagne-glasses" : "champagne-glasses";
          } else if (route.name === "Chat") {
            iconName = focused ? "message" : "message";
          } else if (route.name === "Notifications") {
            iconName = focused ? "bell" : "bell";
          }
          return (
            // <FontAwesomeIcon icon={["fas", iconName]} size={22} color={color} />
            null
          );
        },

        tabBarActiveTintColor: COLORS.primaryColor,
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: COLORS.backgroundColor,
          borderTopWidth: 0,
          display: "flex",
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.primaryFontBold,
          fontWeight: "600",
        },
        headerShown: false,
        navigationBarColor: "red",
      })}
    >
      <Tab.Screen name={ROUTES.homeScreen} component={HomeStack} />
      <Tab.Screen name="Communauté" component={SecondStack} />
      <Tab.Screen name="Mes soirées" component={ThirdStack} />
      <Tab.Screen name="Chat" component={FourthStack} />
    </Tab.Navigator>
  );
}
