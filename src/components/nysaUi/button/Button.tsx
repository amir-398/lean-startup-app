import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import String from "../string";
import { BtnProps } from "../utils/types";

// height Tailwind Variants
const heightVr = tv({
  base: "h-16",
  variants: {
    size: {
      "2xs": "h-8",
      xs: "h-10",
      sm: "h-14",
      md: "h-16",
      lg: "h-20",
      xl: "h-24",
      "2xl": "h-32",
    },
  },
});

// background color Tailwind Variants
const btnVariant = tv({
  base: "bg-primary",
  variants: {
    variant: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary border border-white bg-darkLight",
    },
  },
});

// position Tailwind Variants
const positionVr = tv({
  base: "self-center",
  variants: {
    position: {
      left: "self-start",
      center: "self-center",
      right: "self-end",
    },
  },
});

// opacity Tailwind Variants
const opacityVariant = tv({
  base: "opacity-100",
  variants: {
    disabled: {
      true: "opacity-40",
    },
    loading: {
      true: "opacity-40",
    },
  },
});

export default function Button({
  title,
  onPress,
  textClassName,
  btnClassName,
  disabled,
  loading,
  size = "md",
  textWeight = "bold",
  textSize,
  variant = "primary",
  leftIcon,
  position = "center",
}: BtnProps) {
  // height Tailwind Variants

  const stringVariant = () => {
    if (variant === "tertiary" || variant === "primary") return "white";
    else return "secondary";
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={twMerge(
        heightVr({ size }),
        btnVariant({ variant }),
        positionVr({ position }),
        opacityVariant({ disabled, loading }),
        "items-center justify-center rounded-lg w-full",
        btnClassName
      )}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" size={30} />
      ) : (
        <>
          {leftIcon ? (
            <View className="absolute left-4">{leftIcon}</View>
          ) : null}
          <String
            className={textClassName}
            weight={textWeight}
            variant={stringVariant()}
            size={textSize ?? size}
            position="center"
          >
            {title}
          </String>
        </>
      )}
    </TouchableOpacity>
  );
}
