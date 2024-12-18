import { Pressable, View } from "react-native";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@components/nysaUi/dialog";
import { useState, useCallback } from "react";
import { Button, String } from "@/components/nysaUi";
import Checkbox from "expo-checkbox";
import COLORS from "@/constants/COLORS";

const VISIBILITY_OPTIONS = [
  { key: "public", label: "Tout le monde" },
  { key: "friendsAndFriends", label: "Amis et leurs amis" },
  { key: "friends", label: "Amis" },
  { key: "private", label: "Personnes que j'invite" },
];

export default function EventVisibilityModal({ children, setFieldValue }) {
  const [visible, setVisible] = useState(false);
  const [selectedVisibility, setSelectedVisibility] = useState(null);

  const handleSelect = useCallback(
    (optionKey: string) => {
      // On sélectionne une seule visibilité à la fois
      setSelectedVisibility(optionKey);
    },
    [setSelectedVisibility]
  );

  const handleConfirm = useCallback(() => {
    setFieldValue("visibility", selectedVisibility);
    setVisible(false);
  }, [selectedVisibility, setFieldValue]);

  return (
    <Dialog>
      <DialogTrigger setVisible={setVisible}>{children}</DialogTrigger>
      <DialogContent visible={visible} setVisible={setVisible} closeMark>
        <>
          <String position="center" size="xl">
            Inclus dans les participants
          </String>
          <View className="gap-4 my-8">
            {VISIBILITY_OPTIONS.map(({ key, label }) => (
              <Pressable
                key={key}
                onPress={() => handleSelect(label)}
                className="flex flex-row justify-between items-center"
              >
                <String>{label}</String>
                <Checkbox
                  disabled={false}
                  value={selectedVisibility === label}
                  onValueChange={() => handleSelect(label)}
                  color={
                    selectedVisibility === label
                      ? COLORS.primaryColor
                      : undefined
                  }
                />
              </Pressable>
            ))}
          </View>
          <View>
            <Button
              title="Confirmer"
              size="sm"
              onPress={handleConfirm}
              disabled={!selectedVisibility}
            />
          </View>
        </>
      </DialogContent>
    </Dialog>
  );
}
