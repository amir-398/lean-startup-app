import FONTS from "@constants/FONTS";
import { CalendarTheme } from "@marceloterreiro/flash-calendar";
const calendarColor = "#FF6D32";
const borderRadius = 20;

export const calendarTheme: CalendarTheme = {
  // month string
  rowMonth: {
    content: {
      fontFamily: FONTS.primaryFontMedium,
      color: "#000",
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
        color: isWeekend && !isPressed ? "rgba(0, 0, 0, 0.8)" : "#000",
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
        color: isPressed ? "#fff" : "#000",
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
