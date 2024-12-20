import { Button, Calendar, CalendarRange } from "@components/nysaUi";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@components/nysaUi/dialog";
import { CalendarActiveDateRange } from "@marceloterreiro/flash-calendar";
import { formatDate } from "@utils/time";
import { useState } from "react";
import { View } from "react-native";
import { CalendarsModalProps } from "../utils/types";

export default function CalendarModal({
  children,
  setCalendarValue,
  type = "single",
  defaultValues,
  setHourModalVisible,
}: CalendarsModalProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<CalendarActiveDateRange | null>(
    null
  );
  const [visible, setVisible] = useState(false);

  // handle submit
  const handleSubmit = () => {
    if (type === "single") {
      const formattedDate = formatDate(selectedDate, "DD/MM/YYYY");
      setCalendarValue(formattedDate);
      setHourModalVisible(true);
    } else {
      setCalendarValue(dateRange.startId);
      setCalendarValue(dateRange.endId);
    }
    setVisible(false);
  };

  // handle disabled button
  const handleDisabledBtn = () => {
    if (type === "single") {
      return !!selectedDate;
    } else {
      if (dateRange && dateRange?.startId?.length > 0) {
        return false;
      }
    }
    return true;
  };

  return (
    <Dialog>
      <DialogTrigger setVisible={setVisible}>{children}</DialogTrigger>
      <DialogContent visible={visible} setVisible={setVisible} closeMark>
        <View className="mt-2 mb-5">
          {type === "single" && (
            <Calendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          )}
          {type === "range" && (
            <CalendarRange
              setDateRange={setDateRange}
              defaultValues={
                defaultValues as {
                  startDate: string;
                  endDate: string | undefined;
                }
              }
            />
          )}
        </View>
        <Button
          title="Confirmer"
          onPress={handleSubmit}
          size="sm"
          btnClassName="bg-[#FF6D32]"
        />
      </DialogContent>
    </Dialog>
  );
}
