import { View } from "react-native";
import { useCallback, useState } from "react";
import CustomIcon from "../customIcon/CustomIcon";
import {
  Calendar as FlashCalendar,
  toDateId,
} from "@marceloterreiro/flash-calendar";
import dayjs from "dayjs";
import { CalendarProps } from "../utils/types";
import { getTodayDate } from "@/utils/time";
import { calendarTheme } from "./calendarTheme";

export default function Calendar({
  selectedDate,
  setSelectedDate,
}: CalendarProps) {
  const [currentCalendarMonth, setCurrentCalendarMonth] = useState(dayjs());
  const today = toDateId(currentCalendarMonth.toDate());

  const handlePreviousMonth = useCallback(() => {
    setCurrentCalendarMonth((prev) => prev.subtract(1, "month"));
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentCalendarMonth((prev) => prev.add(1, "month"));
  }, []);

  return (
    <View className="relative">
      <View className="absolute -top-1 right-0 w-full flex-row justify-between items-center z-10">
        <CustomIcon
          variant="arrow-left"
          size="sm"
          onPress={handlePreviousMonth}
          wrapper
        />

        <CustomIcon
          variant="arrow-right"
          size="sm"
          onPress={handleNextMonth}
          wrapper
        />
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
