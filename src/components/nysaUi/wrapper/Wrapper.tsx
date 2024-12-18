import { ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { WrapperProps } from "../utils/types";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const classNameViewVariants = tv({
  variants: {
    height: {
      "flex-1": "flex-1",
      "h-full": "h-full",
      "h-screen": "h-screen",
    },
    px: {
      true: "px-4",
    },
    py: {
      true: "py-6",
    },
    pt: {
      1: "pt-1",
      2: "pt-2",
      3: "pt-3",
      4: "pt-4",
      5: "pt-5",
      6: "pt-6",
      7: "pt-7",
      8: "pt-8",
      9: "pt-9",
      10: "pt-10",
    },
    itemsCenter: {
      true: "items-center",
    },
    justifyBetween: {
      true: "justify-between",
    },
    safeAreaView: {
      true: "flex-grow",
      false: "flex-grow",
    },
  },
  defaultVariants: {
    px: true,
  },
});

const containerClassName = (props: WrapperProps) => {
  const { px, py, pt, height, className, justifyBetween } = props;
  return twMerge(
    classNameViewVariants({ px, py, pt, height, justifyBetween }),
    className
  );
};

const ViewComponent = (props: WrapperProps, children: React.ReactNode) => (
  <View className={containerClassName(props)}>{children}</View>
);

const ScrollViewComponent = (
  props: WrapperProps,
  children: React.ReactNode
) => (
  <ScrollView
    contentContainerClassName={containerClassName(props)}
    keyboardShouldPersistTaps="handled"
    className="flex-grow"
  >
    {children}
  </ScrollView>
);

const KeyboardAwareScrollViewComponent = (
  props: WrapperProps,
  children: React.ReactNode
) => (
  <KeyboardAwareScrollView
    contentContainerClassName={containerClassName(props)}
    keyboardShouldPersistTaps="handled"
    className="flex-grow"
    bottomOffset={20}
  >
    {children}
  </KeyboardAwareScrollView>
);

const IsScrollComponent = (props: WrapperProps, children: React.ReactNode) => {
  if (props.keyboardAwareScrollView) {
    return KeyboardAwareScrollViewComponent(props, children);
  } else if (props.scrollView) {
    return ScrollViewComponent(props, children);
  } else {
    return ViewComponent(props, children);
  }
};

const safeAreaViewComponents = (
  props: WrapperProps,
  children: React.ReactNode
) => (
  <SafeAreaView className="flex-grow z-50">
    {IsScrollComponent(props, children)}
  </SafeAreaView>
);

const IsSafeAreaViewComponent = (
  props: WrapperProps,
  children: React.ReactNode
) => {
  const { safeAreaView = true } = props;
  return safeAreaView
    ? safeAreaViewComponents(props, children)
    : IsScrollComponent(props, children);
};

export default function Wrapper(props: WrapperProps) {
  const { children } = props;

  return IsSafeAreaViewComponent(props, children);
}
