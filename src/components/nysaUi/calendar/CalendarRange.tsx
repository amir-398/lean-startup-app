import { View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import CustomIcon from "../customIcon/CustomIcon";
import {
  Calendar as FlashCalendar,
  toDateId,
  useDateRange,
} from "@marceloterreiro/flash-calendar";
import dayjs from "dayjs";

import { CalendarRangeProps } from "../utils/types";
import { getTodayDate } from "@/utils/time";
import { calendarTheme } from "./calendarTheme";

export default function Calendar({
  setDateRange,
  defaultValues,
}: CalendarRangeProps) {
  const [currentCalendarMonth, setCurrentCalendarMonth] = useState(dayjs());
  const today = toDateId(currentCalendarMonth.toDate());

  const handlePreviousMonth = useCallback(() => {
    setCurrentCalendarMonth((prev) => prev.subtract(1, "month"));
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentCalendarMonth((prev) => prev.add(1, "month"));
  }, []);

  // format default values for the calendar to match the format of the calendar
  const formatedDefaultValues = {
    startId: defaultValues.startDate,
    endId: defaultValues.endDate,
  };
  const { calendarActiveDateRanges, onCalendarDayPress, dateRange } =
    useDateRange(formatedDefaultValues);

  // update the date range
  useEffect(() => {
    setDateRange(dateRange);
  }, [dateRange]);

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
        calendarActiveDateRanges={calendarActiveDateRanges}
        calendarMinDateId={getTodayDate()}
        calendarMonthId={today}
        onCalendarDayPress={onCalendarDayPress}
        theme={calendarTheme}
        calendarFormatLocale="fr"
      />
    </View>
  );
}
