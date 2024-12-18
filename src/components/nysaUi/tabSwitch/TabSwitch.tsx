import React, { useState, useRef } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import COLORS from "@constants/COLORS";
import String from "@nysaUi/string";
type TabSwitchProps = {
  leftRender: JSX.Element;
  rightRender: JSX.Element;
  leftScreenTitle: string;
  rightScreenTitle: string;
};

type ScreenType = {
  key: "leftScreen" | "rightScreen";
};

const width = Dimensions.get("window").width;

export default function TabSwitch({
  leftRender,
  rightRender,
  leftScreenTitle,
  rightScreenTitle,
}: TabSwitchProps) {
  const [activeScreen, setActiveScreen] = useState<
    "leftScreen" | "rightScreen"
  >("leftScreen"); // Écran actif
  const flatlistRef = useRef<FlatList<ScreenType>>(null);
  const screenType: ScreenType[] = [
    { key: "leftScreen" },
    { key: "rightScreen" },
  ];

  // Shared value for animation
  const translateX = useSharedValue(0);

  const handleButtonPress = (index: number) => {
    flatlistRef.current?.scrollToIndex({ animated: true, index });
    translateX.value = withTiming(index * (width / 2), { duration: 300 });
    setActiveScreen(screenType[index].key); // Met à jour l'écran actif
  };

  const onScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    translateX.value = offsetX / 2;

    // Calculer l'index visible en fonction de l'offset
    const activeIndex = Math.round(offsetX / width);
    setActiveScreen(screenType[activeIndex].key); // Met à jour l'écran actif dynamiquement
  };

  // Animated style for the separator
  const animatedSeparatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View className="flex-1">
      {/* Header */}
      <View className="flex-row">
        <Pressable
          className="w-1/2 items-center p-4"
          onPress={() => handleButtonPress(0)}
        >
          <String
            variant={activeScreen === "leftScreen" ? "nysa" : "primary"}
            weight="bold"
            size="lg"
          >
            {leftScreenTitle}
          </String>
        </Pressable>
        <Pressable
          className="w-1/2 items-center p-4"
          onPress={() => handleButtonPress(1)}
        >
          <String
            variant={activeScreen === "rightScreen" ? "nysa" : "primary"}
            weight="bold"
            size="lg"
          >
            {rightScreenTitle}
          </String>
        </Pressable>
      </View>

      {/* Separator */}
      <View className="relative h-0.5 bg-[#808080]">
        <Animated.View
          style={[styles.separatorSlider, animatedSeparatorStyle]}
        />
      </View>

      {/* Content */}
      <FlatList
        ref={flatlistRef}
        data={screenType}
        keyboardShouldPersistTaps="handled"
        horizontal
        pagingEnabled
        onScroll={onScroll} // Trigger animation during scroll
        scrollEventThrottle={16} // Optimize scroll event handling
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>
          item.key === "leftScreen" ? (
            <View className="w-screen">{leftRender}</View>
          ) : (
            <View className="w-screen">{rightRender}</View>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  separatorSlider: {
    width: "50%",
    height: "100%",
    backgroundColor: COLORS.primaryColor,
    position: "absolute",
  },
});
