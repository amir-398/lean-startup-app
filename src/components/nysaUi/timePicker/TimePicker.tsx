import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SelectTime } from "./SelectTime";
import { TimePickerOptionsProps, TimePickerProps } from "../utils/types";

const options = {
  backgroundColor: "#fff",
  textHeaderColor: "#212c35",
  textDefaultColor: "#2d4150",
  selectedTextColor: "#fff",
  mainColor: "#61dafb",
  textSecondaryColor: "#7a92a5",
  borderColor: "rgba(122, 146, 165, 0.1)",
  defaultFont: "System",
  headerFont: "System",
  textFontSize: 15,
  textHeaderFontSize: 17,
  headerAnimationDistance: 100,
  daysAnimationDistance: 200,
  height: 220,
};

const TimePicker = (
  props: TimePickerProps<(typeof minuteIntervalArray)[number]>
) => {
  const { minuteInterval = 5 } = props;
  const timePickerOptions = {
    ...options,
    ...props.options,
  };
  const style = styles(timePickerOptions);
  return (
    <View style={[style.container, { height: timePickerOptions.height }]}>
      <SelectTime
        options={timePickerOptions}
        onTimeChange={props.onTimeChange}
        minuteInterval={minuteInterval}
      />
    </View>
  );
};

const styles = (theme: TimePickerOptionsProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      position: "relative",
      width: "100%",
      overflow: "hidden",
    },
  });

const minuteIntervalArray = [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60];

export { TimePicker };
