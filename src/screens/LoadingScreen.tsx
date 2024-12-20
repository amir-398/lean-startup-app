import video from "@assets/video/loadingVideo.mp4";
import { ResizeMode, Video } from "expo-av";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import ROUTES from "@/constants/ROUTES";
const { width, height } = Dimensions.get("window");

export default function LoadingScreen({ navigation }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate(ROUTES.SUGGESTED_SESSION_SCREEN);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View className="flex-1 bg-black">
      <StatusBar />
      <Video
        ref={videoRef}
        style={styles.video}
        source={video}
        isLooping
        shouldPlay
        resizeMode={ResizeMode.CONTAIN}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: width,
    height: height,
  },
});
