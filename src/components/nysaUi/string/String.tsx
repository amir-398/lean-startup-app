import { Text } from "react-native";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { StringProps } from "../utils/types";

// Tailwind Variants
const textSizeVr = tv({
  base: "text-lg",
  variants: {
    size: {
      "2xs": "text-xs",
      xs: "text-sm",
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl",
      xl: "text-2xl",
      "2xl": "text-3xl",
      "3xl": "text-4xl",
      "4xl": "text-5xl leading-snug",
    },
  },
});

const textWeightVr = tv({
  base: "font-poppinsMedium",
  variants: {
    weight: {
      light: "font-poppinsLight",
      regular: "font-poppins",
      medium: "font-poppinsMedium",
      semiBold: "font-poppinsSemiBold",
      bold: "font-poppinsBold",
    },
  },
});

const textColorVr = tv({
  base: "text-white",
  variants: {
    variant: {
      primary: "text-white",
      secondary: "text-dark",
      nysa: "text-primary",
      error: "text-error",
      tertiary: "text-gray-400",
      success: "text-green-500",
      danger: "text-red-500",
      warning: "text-yellow-500",
      info: "text-blue-300",
      light: "text-gray-300",
      dark: "text-black",
    },
  },
});

const textPositionVr = tv({
  base: "text-left",
  variants: {
    position: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
  },
});

const textDecorationVr = tv({
  base: "",
  variants: {
    textDecoration: {
      underline: "underline",
      lineThrough: "line-through",
    },
  },
});
export default function String({
  size = "md",
  weight = "medium",
  content,
  variant = "primary",
  children,
  textDecoration,
  position = "left",
  className,
  onPress,
}: StringProps) {
  // Filtre les valeurs indéfinies

  const dynamicClasses = twMerge(
    textSizeVr({ size }),
    textWeightVr({ weight }),
    textColorVr({ variant }),
    textPositionVr({ position }),
    textDecorationVr({ textDecoration }),
    className
  );

  return (
    <Text className={dynamicClasses} onPress={onPress}>
      {children ? children : content}
    </Text>
  );
}
