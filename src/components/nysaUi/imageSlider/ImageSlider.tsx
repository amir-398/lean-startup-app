import { FlatList, ImageBackground, View } from "react-native";
import { useState } from "react";
import String from "@nysaUi/string";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { StringProps } from "../utils/types";

interface ImageSliderProps {
  items: {
    id: string;
    image?: string;
    uri?: string;
    title?: string;
  }[];
  children?: React.ReactNode;
  dotPosition?: string;
  dotSize?: StringProps["size"];
}

export default function ImageSlider(props: ImageSliderProps) {
  const { items, children, dotPosition, dotSize = "lg" } = props;
  const [imgActive, setimgActive] = useState(0);

  const onchange = (nativeEvent: any) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };

  const dotVariants = tv({
    variants: {
      imageActive: {
        true: "text-white",
        false: "text-gray-300",
      },
    },
  });

  return (
    <>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        onScroll={({ nativeEvent }) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ImageBackground
            className="w-screen h-full items-center justify-center"
            source={item.uri ? { uri: item.uri } : { uri: item.image }}
          >
            {item.title && (
              <String size="4xl" weight="bold">
                {item.title}
              </String>
            )}
          </ImageBackground>
        )}
      />
      <View
        className={twMerge(
          "absolute bottom-14 w-full items-center justify-center",
          dotPosition
        )}
      >
        <View className="flex-row gap-4 mb-3">
          {items.map((item, index) => (
            <String
              key={item.id}
              className={dotVariants({ imageActive: imgActive == index })}
              size={dotSize}
            >
              ●
            </String>
          ))}
        </View>
        {children && children}
      </View>
    </>
  );
}
