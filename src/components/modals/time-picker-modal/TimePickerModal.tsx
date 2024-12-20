import { Button, TimePicker } from "@/components/nysaUi";
import { Dialog, DialogContent } from "@components/nysaUi/dialog";
import FONTS from "@constants/FONTS";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { TimePickerModalProps } from "../utils/types";

export default function TimePickerModal({
  children,
  setFieldValue,
  setVisible,
  visible,
}: TimePickerModalProps) {
  const [startPartyTimePicker, setStartPartyTimePicker] = useState<
    string | null
  >(null);
  const [endPartyTimePicker, setEndPartyTimePicker] = useState<string | null>(
    null
  );
  const [isSubmit, setIsSubmit] = useState(false);
  const [timeText, setTimeText] = useState("début");

  //time text
  useEffect(() => {
    isSubmit ? setTimeText("fin") : setTimeText("début");
  }, [isSubmit]);

  const handlePickTime = (time: string) => {
    if (isSubmit) {
      setEndPartyTimePicker(time);
    } else {
      setStartPartyTimePicker(time);
    }
  };

  const handleSubmit = () => {
    setVisible(false);
  };
  return (
    <Dialog>
      <DialogContent visible={visible} setVisible={setVisible} closeMark>
        <>
          <TimePicker
            options={{
              defaultFont: FONTS.primaryFontBold,
              textDefaultColor: "#000",
              mainColor: "#000",
              headerFont: FONTS.primaryFontBold,
              backgroundColor: "transparent",
              textSecondaryColor: "transparent",
            }}
            onTimeChange={handlePickTime}
          />
          <View>
            <Button
              title="Confirmer"
              onPress={handleSubmit}
              size="sm"
              btnClassName="bg-[#FF6D32]"
            />
          </View>
        </>
      </DialogContent>
    </Dialog>
  );
}
