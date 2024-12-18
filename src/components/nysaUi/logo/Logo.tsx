import { logo } from "@assets/logo";
import { Animated } from "react-native";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
interface LogoProps {
  className?: string;
  position?: "left" | "center" | "right";
  size?: "xs" | "sm" | "md" | "lg";
  mt?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
const logoPositionVariants = tv({
  base: "self-start",
  variants: {
    position: {
      left: "self-start",
      center: "self-center",
      right: "self-end",
    },
  },
});

const sizeVariants = tv({
  variants: {
    size: {
      xs: "w-32 h-16",
      sm: "w-48 h-24",
      md: "w-60 h-28",
      lg: "w-80 h-36",
    },
  },
});

const marginVariants = tv({
  base: "mt-0",
  variants: {
    mt: {
      0: "mt-0",
      1: "mt-1",
      2: "mt-2",
      3: "mt-3",
      4: "mt-4",
      5: "mt-5",
      6: "mt-6",
      7: "mt-7",
      8: "mt-8",
      9: "mt-9",
      10: "mt-10",
    },
  },
});

export default function Logo(props: LogoProps) {
  const { className, position = "left", size = "md", mt } = props;
  const logoClassName = twMerge(
    sizeVariants({ size }),
    logoPositionVariants({ position }),
    marginVariants({ mt }),
    className
  );
  return (
    <Animated.Image
      source={logo}
      className={logoClassName}
      resizeMode={"contain"}
    />
  );
}
