import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useMemo, useState } from "react";
import { Pressable } from "react-native";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { CustomIconProps } from "../utils/types";

// background color variant
const bgColorVr = tv({
  base: "bg-transparent",
  variants: {
    isPressded: {
      true: "bg-darkLight",
    },
  },
});
// padding  variant
const paddingVr = tv({
  base: "p-0",
  variants: {
    size: {
      xs: "p-1",
      sm: "p-2",
      md: "p-3",
      lg: "p-4",
      xl: "p-5",
    },
  },
});
export default function CustomIcon({
  onPress,
  iconSize,
  size = "md",
  variant,
  wrapper,
  color = "#fff",
  type = "solid",
}: CustomIconProps) {
  const [isPressded, setIsPressded] = useState(false);

  const IconSizeVr = useMemo(() => {
    let sizeIcon: number;
    switch (size) {
      case "xl":
        sizeIcon = 25;
        break;
      case "lg":
        sizeIcon = 20;
        break;
      case "md":
        sizeIcon = 18;
        break;
      case "sm":
        sizeIcon = 15;
        break;
      case "xs":
        sizeIcon = 12;
        break;
      default:
        sizeIcon = 22;
    }
    return iconSize ? iconSize : sizeIcon;
  }, [iconSize, size]);

  const icon = useMemo(() => {
    switch (variant) {
      case "back":
        return "arrow-left";
      case "cleanInput":
        return "circle-xmark";
      case "eye":
        return "eye";
      case "eyeSlash":
        return "eye-slash";
      case "search":
        return "magnifying-glass";
      case "filter":
        return "filter";
      case "arrow-left":
        return "angle-left";
      case "arrow-right":
        return "angle-right";
      case "close":
        return "xmark";
      case "share":
        return "share";
      case "heart":
        return "heart";
      case "calendar":
        return "calendar";
      case "calendar-days":
        return "calendar-days";
      case "location":
        return "location-dot";
      case "tag":
        return "tag";
      case "user-group":
        return "user-group";
      case "location-gps":
        return "location-crosshairs";
      default:
        return "circle-xmark";
    }
  }, [variant]);

  const iconType = useMemo(() => {
    switch (type) {
      case "solid":
        return "fas";
      case "regular":
        return "far";
      case "brands":
        return "fab";
      default:
        return "fas";
    }
  }, [type]);

  return (
    <Pressable
      className={twMerge(
        "rounded-full",
        wrapper && paddingVr({ size }),
        bgColorVr({ isPressded })
      )}
      onPressIn={() => setIsPressded(true)}
      onPressOut={() => setIsPressded(false)}
      onPress={onPress}
      android_ripple={{ color: "transparent" }}
    >
      <FontAwesomeIcon
        icon={[iconType, icon]}
        size={IconSizeVr}
        color={"#000"}
      />
    </Pressable>
  );
}
