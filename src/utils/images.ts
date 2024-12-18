import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const USER_REJECTED_PERMISSIONS = "User rejected permissions";

const ERROR_MESSAGES = {
  "image-too-large": "Image trop grande",
  "file-extension-not-allowed":
    "Fichier non autorisé, veuillez sélectionner une image valide.",
  [USER_REJECTED_PERMISSIONS]:
    "Permission refusée, veuillez autoriser l'accès à Nysa.",
};

interface ImagePickerOptions {
  mediaTypes: ImagePicker.MediaType;
  allowsEditing: boolean;
  aspect: [number, number];
  quality: number;
}

const MAX_FILE_SIZE = 2000000; // 20MB
const ALLOWED_EXTENSIONS = ["jpg", "jpeg", "png", "gif"];

const verifySize = (result: ImagePicker.ImagePickerResult) => {
  const fileSize = result.assets[0].fileSize;
  if (fileSize > MAX_FILE_SIZE) {
    throw new Error("Image trop grande");
  }
};

const verifyExtension = (uri: string) => {
  const fileExtension = uri.split(".").pop()?.toLowerCase() || "";
  if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
    throw new Error(
      "Fichier non autorisé, veuillez sélectionner une image valide."
    );
  }
};

export const pickImage = async (
  isCamera: boolean
): Promise<{
  image: string | null;
  isError: boolean;
  error: string | null;
}> => {
  let result: ImagePicker.ImagePickerResult;
  const options: ImagePickerOptions = {
    mediaTypes: "images",
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.5,
  };

  try {
    result = isCamera
      ? await ImagePicker.launchCameraAsync(options)
      : await ImagePicker.launchImageLibraryAsync(options);

    if (result.canceled) {
      return { image: null, isError: false, error: null };
    }

    const uri = result.assets[0].uri;

    verifySize(result);
    verifyExtension(uri);

    return { image: uri, isError: false, error: null };
  } catch (error: any) {
    return {
      image: null,
      isError: true,
      error: error || "Une erreur est survenue",
    };
  }
};

export const usePickImage = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handlePickImage = async (isCamera: boolean) => {
    setIsPending(true);
    setError(null);
    setIsError(false);

    try {
      const { image: pickedImage, isError, error } = await pickImage(isCamera);
      setImage(pickedImage);
      setIsError(isError);
      if (error) throw Error(error);
    } catch (err: any) {
      const errorMessage =
        err.message.includes(USER_REJECTED_PERMISSIONS) &&
        USER_REJECTED_PERMISSIONS;
      setError(ERROR_MESSAGES[errorMessage] || "Une erreur est survenue");
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  };

  return {
    image,
    isPending,
    isError,
    error,
    handlePickImage,
  };
};
