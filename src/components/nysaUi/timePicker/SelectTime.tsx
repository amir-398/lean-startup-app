import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  FlatList,
  TouchableOpacity,
  I18nManager,
} from "react-native";
import { TimeScrollerProps } from "../utils/types";
import Button from "../button/Button";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const TimeScroller = ({
  title,
  data,
  onChange,
  options,
}: TimeScrollerProps) => {
  const [itemSize, setItemSize] = useState(0);
  const style = styles(options);
  const scrollAnimatedValue = useRef(new Animated.Value(0)).current;
  const scrollListener = useRef(null);
  const active = useRef(0);
  data = [undefined, undefined, ...data, undefined, undefined];

  useEffect(() => {
    scrollListener.current && clearInterval(scrollListener.current);
    scrollListener.current = scrollAnimatedValue.addListener(
      ({ value }) => (active.current = value)
    );

    return () => {
      clearInterval(scrollListener.current);
    };
  }, [scrollAnimatedValue]);

  const changeItemWidth = ({ nativeEvent }) => {
    const { width } = nativeEvent.layout;
    !itemSize && setItemSize(width / 5);
  };

  const renderItem = ({ item, index }) => {
    const makeAnimated = (a: number, b: number, c: number) => {
      return {
        inputRange: [...data.map((_, i) => i * itemSize)],
        outputRange: [
          ...data.map((_, i) => {
            const center = i + 2;
            if (center === index) {
              return a;
            } else if (center + 1 === index || center - 1 === index) {
              return b;
            } else {
              return c;
            }
          }),
        ],
      };
    };

    return (
      <Animated.View
        style={[
          {
            width: itemSize,
            opacity: scrollAnimatedValue.interpolate(makeAnimated(1, 0.6, 0.3)),
            transform: [
              {
                scale: scrollAnimatedValue.interpolate(
                  makeAnimated(1.2, 0.9, 0.8)
                ),
              },
            ],
          },
          style.listItem,
        ]}
      >
        <Text style={style.listItemText}>{item}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={style.row} onLayout={changeItemWidth}>
      <Text style={style.title}>{title}</Text>
      <AnimatedFlatList
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToInterval={itemSize}
        decelerationRate={"fast"}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollAnimatedValue } } }],
          {
            useNativeDriver: true,
          }
        )}
        data={data}
        onMomentumScrollEnd={() => {
          const index = Math.round(active.current / itemSize);
          onChange(data[index + 2]);
        }}
        keyExtractor={(_, i) => String(i)}
        renderItem={renderItem}
      />
    </View>
  );
};

const SelectTime = ({ options, onTimeChange, minuteInterval }) => {
  const [time, setTime] = useState({
    minute: 0,
    hour: 0,
  });

  const style = styles(options);

  useEffect(() => {
    onTimeChange(`${time.hour}:${time.minute}`);
  }, [time]);

  return (
    <Animated.View style={style.container}>
      <TimeScroller
        title={"Heures"}
        data={Array.from({ length: 24 }, (x, i) => i)}
        onChange={(hour) => setTime({ ...time, hour })}
        options={options}
      />
      <TimeScroller
        title={"Minutes"}
        data={Array.from(
          { length: 60 / minuteInterval },
          (x, i) => i * minuteInterval
        )}
        onChange={(minute) => setTime({ ...time, minute })}
        options={options}
      />
    </Animated.View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      right: 0,
      backgroundColor: theme.backgroundColor,
      borderRadius: 10,
      flexDirection: "column",
      justifyContent: "center",
      zIndex: 999,
    },
    row: {
      flexDirection: "column",
      alignItems: "center",
      marginVertical: 5,
    },
    title: {
      fontSize: theme.textHeaderFontSize,
      color: theme.mainColor,
      fontFamily: theme.headerFont,
    },
    listItem: {
      height: 60,
      alignItems: "center",
      justifyContent: "center",
    },
    listItemText: {
      fontSize: theme.textHeaderFontSize,
      color: theme.textDefaultColor,
      fontFamily: theme.defaultFont,
    },
  });

export { SelectTime };
