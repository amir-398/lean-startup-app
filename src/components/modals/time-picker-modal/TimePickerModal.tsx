import { Button, String, TimePicker } from "@/components/nysaUi";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@components/nysaUi/dialog";
import COLORS from "@constants/COLORS";
import FONTS from "@constants/FONTS";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { TimePickerModalProps } from "../utils/types";

export default function TimePickerModal({
  children,
  setFieldValue,
}: TimePickerModalProps) {
  const [visible, setVisible] = useState(false);
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
    if (isSubmit) {
      setVisible(false);
      setFieldValue(
        "time",
        `de ${startPartyTimePicker} à ${endPartyTimePicker}`
      );
      setIsSubmit(false);
    } else {
      console.log("not submit");

      setIsSubmit(true);
    }
  };
  return (
    <Dialog>
      <DialogTrigger setVisible={setVisible}>{children}</DialogTrigger>
      <DialogContent visible={visible} setVisible={setVisible} closeMark>
        <>
          <String position="center" size="xl">
            Heure de{" "}
            <String size="xl" variant="nysa" className="font-bold">
              {timeText}
            </String>{" "}
            de la fête
          </String>
          <TimePicker
            options={{
              defaultFont: FONTS.primaryFontBold,
              textDefaultColor: "white",
              mainColor: COLORS.btnColor,
              headerFont: FONTS.primaryFontBold,
              backgroundColor: "transparent",
              textSecondaryColor: "transparent",
            }}
            onTimeChange={handlePickTime}
          />
          <View>
            <Button title="Confirmer" onPress={handleSubmit} size="sm" />
          </View>
        </>
      </DialogContent>
    </Dialog>
  );
}
