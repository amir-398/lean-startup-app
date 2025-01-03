import { CalendarTheme } from "@marceloterreiro/flash-calendar";
import COLORS from "@constants/COLORS";
import FONTS from "@constants/FONTS";
const calendarColor = COLORS.primaryColor;
const borderRadius = 20;

export const calendarTheme: CalendarTheme = {
  // month string
  rowMonth: {
    content: {
      fontFamily: FONTS.primaryFontMedium,
      color: "#fff",
    },
  },
  // row week
  rowWeek: {
    container: {
      borderBottomWidth: 1,
      borderBottomColor: "rgba(255, 255, 255, 0.1)",
      borderStyle: "solid",
    },
  },
  // item week name
  itemWeekName: { content: { color: "rgba(255, 255, 255, 0.5)" } },
  // item day container
  itemDayContainer: {
    activeDayFiller: {
      backgroundColor: calendarColor,
    },
  },
  // item day
  itemDay: {
    idle: ({ isPressed, isWeekend }) => ({
      container: {
        width: 40,
        backgroundColor: isPressed ? calendarColor : "transparent",
        borderRadius: borderRadius,
      },
      content: {
        color: isWeekend && !isPressed ? "rgba(255, 255, 255, 0.5)" : "#ffffff",
      },
    }),
    today: ({ isPressed }) => ({
      container: {
        width: 40,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: borderRadius,
        backgroundColor: isPressed ? calendarColor : "transparent",
      },
      content: {
        color: isPressed ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
      },
    }),
    active: ({ isEndOfRange, isStartOfRange }) => ({
      container: {
        width: 40,
        backgroundColor: calendarColor,
        borderTopLeftRadius: isStartOfRange ? borderRadius : 0,
        borderBottomLeftRadius: isStartOfRange ? borderRadius : 0,
        borderTopRightRadius: isEndOfRange ? borderRadius : 0,
        borderBottomRightRadius: isEndOfRange ? borderRadius : 0,
      },
      content: {
        color: "#ffffff",
      },
    }),
  },
};
