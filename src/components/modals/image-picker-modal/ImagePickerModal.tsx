import { Dialog, DialogContent, DialogTrigger } from "@nysaUi/dialog";
import { useEffect, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import String from "@nysaUi/string";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { usePickImage } from "@utils/images";
import { twMerge } from "tailwind-merge";

export default function ImagePickerModal({
  setImage,
  triggerClassname,
  title,
  titleSize = "sm",
}: {
  setImage: (value: string) => void;
  triggerClassname?: string;
  title?: string;
  titleSize?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}) {
  const [imagePickerModalIsVisible, setImagePickerModalIsVisible] =
    useState(false);
  const { image, isError, error, handlePickImage } = usePickImage();

  useEffect(() => {
    if (image) {
      setImage(image);
      setImagePickerModalIsVisible(false);
    }
  }, [image]);

  return (
    <Dialog>
      <DialogTrigger
        className={twMerge(
          "bg-darkLight rounded-lg border-2 border-white justify-center items-center border-dashed",
          triggerClassname
        )}
        setVisible={setImagePickerModalIsVisible}
      >
        {image ? (
          <Image source={{ uri: image }} style={styles.imagePicked} />
        ) : (
          <>
            <String size="xl">+</String>
            {title && (
              <String size={titleSize} weight="bold">
                {title}
              </String>
            )}
          </>
        )}
      </DialogTrigger>
      <DialogContent
        visible={imagePickerModalIsVisible}
        setVisible={setImagePickerModalIsVisible}
        closeMark
      >
        <View className="items-center">
          <String weight="bold">Ajouter une image</String>
          <View className="flex-row items-center justify-around w-full h-24 mt-4">
            <TouchableOpacity
              className="w-1/2 items-center justify-center gap-1"
              onPress={() => handlePickImage(true)}
            >
              <FontAwesomeIcon
                icon={["fas", "camera-retro"]}
                size={22}
                color="#fff"
              />
              <String size="xs" weight="bold">
                Ouvrir caméra
              </String>
            </TouchableOpacity>
            <View className="bg-white w-0.5 h-3/4" />
            <TouchableOpacity
              className="w-1/2 items-center justify-center gap-1"
              onPress={() => handlePickImage(false)}
            >
              <FontAwesomeIcon
                icon={["fas", "images"]}
                size={22}
                color="#fff"
              />
              <String size="xs" weight="bold">
                Gallerie
              </String>
            </TouchableOpacity>
          </View>
          <View className="py-2">
            {isError && (
              <String variant="error" size="xs" position="center">
                {error}
              </String>
            )}
          </View>
        </View>
      </DialogContent>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    height: 180,
    paddingVertical: 10,
  },
  imagePicked: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  wrapperImagePicker: {
    width: 150,
    height: 150,
    backgroundColor: "#151515",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 15,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperImagePickerModal: {
    width: "35%",
    height: "70%",
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-around",
    flexDirection: "column",
  },

  separator: {
    width: 1,
    height: "70%",
    backgroundColor: "#fff",
  },
});
