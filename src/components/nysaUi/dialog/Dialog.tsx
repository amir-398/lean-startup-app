import { Icon } from "@rneui/themed";
import { Modal, TouchableOpacity, View } from "react-native";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import {
  DialogContentProps,
  DialogProps,
  DialogTriggerProps,
} from "../utils/types";

// Types pour les props

export function Dialog({ children }: DialogProps) {
  return <>{children}</>;
}

export function DialogTrigger({
  children,
  setVisible,
  className,
}: DialogTriggerProps) {
  if (!setVisible) {
    return <>{children}</>;
  }

  return (
    <TouchableOpacity
      onPress={() => setVisible(true)}
      className={"relative z-50"}
    >
      {children}
    </TouchableOpacity>
  );
}

DialogTrigger.displayName = "DialogTrigger";

const closeMarkVariants = tv({
  variants: {
    closeMark: {
      true: "pt-12",
    },
  },
});

export function DialogContent({
  visible,
  setVisible,
  children,
  dialogBg,
  closeMark,
  container = true,
}: DialogContentProps) {
  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent={true}
      animationType="fade"
    >
      {container && (
        <View className="flex-1 bg-[rgba(0,0,0,0.5)] items-center justify-center">
          <View
            className={twMerge(
              "relative rounded-xl border border-white bg-white w-5/6 p-5",
              dialogBg,
              closeMarkVariants({ closeMark })
            )}
          >
            {closeMark && (
              <View className="absolute right-2 top-2 z-10">
                <Icon
                  name="close"
                  type="ant-design"
                  onPress={() => setVisible(false)}
                />
              </View>
            )}

            {children}
          </View>
        </View>
      )}
      {!container && children}
    </Modal>
  );
}

DialogContent.displayName = "DialogContent";
