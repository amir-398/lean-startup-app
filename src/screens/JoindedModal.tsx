import { Button, String } from "@/components/nysaUi";
import ROUTES from "@/constants/ROUTES";
import { modalimg } from "@assets/images";
import { Dialog, DialogContent } from "@nysaUi/dialog";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";
export default function JoinedModal({ visible, setVisible }) {
  const navigation = useNavigation();
  return (
    <Dialog>
      <DialogContent visible={visible} setVisible={setVisible} closeMark>
        <View className="items-center">
          <Image source={modalimg} className="size-32" resizeMode="contain" />
          <View className="my-10 gap-3 items-center">
            <String className="font-bold text-[#178278]" size="3xl">
              Bravo
            </String>
            <String variant="dark">
              Tu as rejoins la session avec succés.
            </String>
          </View>
          <Button
            btnClassName="bg-[#FF9C4E]"
            textClassName="text-white font-bold"
            title="Voir ma session"
            onPress={() => {
              navigation.navigate(ROUTES.MY_SESSION);
              setVisible(false);
            }}
          />
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
