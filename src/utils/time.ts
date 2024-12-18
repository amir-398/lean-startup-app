import dayjs from "dayjs";

// Format date
export function formatDate(date: string, format: string = "DD/MM/YYYY") {
  return dayjs(date, "YYYY-MM-DD").format(format);
}

// Get today date
export function getTodayDate(format: string = "YYYY-MM-DD") {
  return dayjs().format(format);
}
