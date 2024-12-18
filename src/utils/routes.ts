import { useNavigationState } from "@react-navigation/native";

export const getActiveScreen = () => {
  const navigationState = useNavigationState((state) => state);
  const getNestedRouteName = (state: any): string | null => {
    if (!state) return null;
    const route = state.routes[state.index];
    if (route.state) {
      return getNestedRouteName(route.state);
    }
    return route.name;
  };
  const currentRouteName = getNestedRouteName(navigationState);
  return { currentRouteName };
};
