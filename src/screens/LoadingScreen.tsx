import video from "@assets/video/loadingVideo.mp4";
import { ResizeMode, Video } from "expo-av";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
const { width, height } = Dimensions.get("window");
export default function LoadingScreen() {
  const videoRef = React.useRef(null);
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
