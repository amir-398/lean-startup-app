import { getTodayDate } from "@/utils/time";
import {
  Calendar as FlashCalendar,
  toDateId,
} from "@marceloterreiro/flash-calendar";
import { Icon } from "@rneui/themed";
import dayjs from "dayjs";
import { useCallback, useState } from "react";
import { View } from "react-native";
import { CalendarProps } from "../utils/types";
import { calendarTheme } from "./calendarTheme";

export default function Calendar({
  selectedDate,
  setSelectedDate,
}: CalendarProps) {
  console.log("selectedDate", selectedDate);
  const [date, setDate] = useState("2024-12-24");
  const [currentCalendarMonth, setCurrentCalendarMonth] = useState(dayjs());
  const today = toDateId(currentCalendarMonth.toDate());

  const handlePreviousMonth = useCallback(() => {
    setCurrentCalendarMonth((prev) => prev.subtract(1, "month"));
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentCalendarMonth((prev) => prev.add(1, "month"));
  }, []);

  return (
    <View>
      <View className="absolute -top-1 right-0 w-full flex-row justify-between items-center z-10">
        <Icon name="arrow-back-ios" type="mayerial-icons" />
        <Icon name="arrow-forward-ios" type="mayerial-icons" />
      </View>
      <FlashCalendar
        calendarActiveDateRanges={[
          {
            startId: selectedDate ?? undefined,
            endId: selectedDate ?? undefined,
          },
        ]}
        calendarMinDateId={getTodayDate()}
        calendarMonthId={today}
        onCalendarDayPress={setSelectedDate}
        theme={calendarTheme}
        calendarFormatLocale="fr"
      />
    </View>
  );
}
