import { TabBar } from "@/components/components";
import ROUTES from "@/constants/ROUTES";
import { getActiveScreen } from "@/utils/routes";
import {
  eventIcon,
  homeIcon,
  notificationIcon,
  profilIcon,
  sessionsIcon,
} from "@assets/icons";
import COLORS from "@constants/COLORS";
import FONTS from "@constants/FONTS";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import HomeStack from "./stacks/HomeStack";
import {
  default as FourthStack,
  default as ProfilStack,
} from "./stacks/ProfilStack";
import SecondStack from "./stacks/SecondStack";
import ThirdStack from "./stacks/ThirdStack";
const Tab = createBottomTabNavigator();
const hideTabBarScreens = [
  ROUTES.SESSIONS_SCREEN,
  ROUTES.SESSION_CONFIRMATION_SCREEN,
];

export default function MainNavigation() {
  const { currentRouteName } = getActiveScreen();
  console.log(currentRouteName);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === ROUTES.HOME_SCREEN) {
            iconName = focused ? homeIcon : homeIcon;
          } else if (route.name === ROUTES.EVENTS_SCREEN) {
            iconName = focused ? eventIcon : eventIcon;
          } else if (route.name === ROUTES.NOTIFICATIONS_SCREEN) {
            iconName = focused ? notificationIcon : notificationIcon;
          } else if (route.name === ROUTES.SESSIONS_SCREEN) {
            iconName = focused ? sessionsIcon : sessionsIcon;
          } else if (route.name === ROUTES.PROFIL_SCREEN) {
            iconName = focused ? profilIcon : profilIcon;
          }
          return <Image source={iconName} className="size-8" />;
        },

        tabBarActiveTintColor: COLORS.primaryColor,
        tabBarInactiveTintColor: "red",
        tabBarStyle: {
          position: "absolute",
          bottom: 80,
          backgroundColor: "#fff",
          display: "flex",
          borderRadius: 20,
          width: "90%",
          height: 60,
          alignItems: "center",
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.primaryFontBold,
          fontWeight: "600",
          color: COLORS.textColor,
        },
        headerShown: false,
      })}
      tabBar={(props) => {
        if (hideTabBarScreens.includes(currentRouteName)) {
          return null;
        }
        return <TabBar {...props} />;
      }}
    >
      <Tab.Screen name={ROUTES.HOME_SCREEN} component={HomeStack} />
      <Tab.Screen name={ROUTES.EVENTS_SCREEN} component={SecondStack} />
      <Tab.Screen name={ROUTES.NOTIFICATIONS_SCREEN} component={ThirdStack} />
      <Tab.Screen name={ROUTES.SESSIONS_SCREEN} component={FourthStack} />
      <Tab.Screen name={ROUTES.PROFIL_SCREEN} component={ProfilStack} />
    </Tab.Navigator>
  );
}
