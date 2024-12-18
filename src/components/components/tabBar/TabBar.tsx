import { useState } from "react";
import { Pressable, View } from "react-native";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const bgColorVr = tv({
  base: "bg-transparent",
  variants: {
    isPressded: {
      true: "bg-[#F2F2F2]",
    },
  },
});
export default function TabBar({ state, descriptors, navigation }) {
  return (
    <View className="bg-white flex-row rounded-3xl w-[95%] absolute bottom-10  items-center self-center py-1 shadow">
      {state.routes.map((route, index) => {
        const [isPressded, setIsPressded] = useState(false);
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const TabBarIcon = options.tabBarIcon;

        return (
          <Pressable
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className={twMerge("flex-1 rounded-full")}
            onPressIn={() => setIsPressded(true)}
            onPressOut={() => setIsPressded(false)}
          >
            <View className={twMerge("items-center gap-1")}>
              <View
                className={twMerge(
                  "p-5 rounded-full items-center justify-center",
                  bgColorVr({ isPressded })
                )}
              >
                <TabBarIcon />
              </View>
              {/* <String variant={isFocused ? "secondary" : "primary"} size="3xs">
                {label}
              </String> */}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
