import { CalendarActiveDateRange } from "@marceloterreiro/flash-calendar";
import { FieldInputProps, FormikProps } from "formik";
import { TextInputProps } from "react-native";

export interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  safeAreaView?: boolean;
  px?: boolean;
  py?: boolean;
  pt?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  itemsCenter?: boolean;
  justifyBetween?: boolean;
  scrollView?: boolean;
  height?: "h-full" | "h-screen" | "flex-1";
  keyboardAvoidingView?: boolean;
  keyboardAwareScrollView?: boolean;
}

export interface BtnProps {
  title: string;
  onPress?: () => void;
  textClassName?: string;
  btnClassName?: string;
  disabled?: boolean;
  loading?: boolean;
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  textSize?: "xs" | "sm" | "md" | "lg" | "xl";
  textWeight?: "light" | "regular" | "medium" | "bold";
  variant?: "primary" | "secondary" | "tertiary";
  leftIcon?: React.ReactNode;
  position?: "left" | "center" | "right";
}

export interface StringProps {
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "light" | "regular" | "medium" | "semiBold" | "bold";
  content?: string;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "danger"
    | "error"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "nysa";
  children?: string | React.ReactNode;
  textDecoration?: "underline" | "lineThrough";
  mr?: number;
  ml?: number;
  mt?: number;
  mnt?: number;
  mb?: number;
  mx?: number;
  my?: number;
  customSize?: number;
  position?: "center" | "left" | "right";
  onPress?: () => void;
  className?: string;
}

export interface FormikCustomInputProps extends TextInputProps {
  secureTextEntry?: boolean;
  iconName?: string;
  iconType?: string;
  label?: string;
  placeholder?: string;
  field: FieldInputProps<string>;
  form: FormikProps<any>;
  onPress?: () => void;
}

export type CustomIconProps = {
  onPress?: () => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  iconSize?: number;
  variant:
    | "close"
    | "back"
    | "cleanInput"
    | "eye"
    | "eyeSlash"
    | "search"
    | "filter"
    | "arrow-left"
    | "arrow-right"
    | "heart"
    | "share"
    | "calendar"
    | "calendar-days"
    | "location"
    | "tag"
    | "user-group"
    | "location-gps";
  wrapper?: boolean;
  color?: string;
  type?: "solid" | "regular" | "brands";
};

// Calendar--------------------------------
export interface CalendarProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}
export interface CalendarRangeProps {
  setDateRange: (dateRange: CalendarActiveDateRange) => void;
  defaultValues?: {
    startDate: string;
    endDate: string;
  };
}
//--------------------------------

// TimePicker--------------------------------
export type TimePickerOptionsProps = {
  backgroundColor: string;
  textHeaderColor: string;
  textDefaultColor: string;
  selectedTextColor: string;
  mainColor: string;
  textSecondaryColor: string;
  borderColor: string;
  defaultFont: string;
  headerFont: string;
  textFontSize: number;
  textHeaderFontSize: number;
  headerAnimationDistance: number;
  daysAnimationDistance: number;
  height: number;
};
export type TimePickerProps<T> = {
  onTimeChange: (date: string) => void;
  current?: string;
  selected?: string;
  configs?: object;
  options?: Partial<TimePickerOptionsProps>;
  minuteInterval?: T;
  style?: object;
};

export type TimeScrollerProps = {
  title: string;
  data: number[];
  onChange: (value: number) => void;
  options: TimePickerOptionsProps;
};
//--------------------------------
// Dialog--------------------------------
export interface DialogProps {
  children: React.ReactNode;
}

export interface DialogTriggerProps {
  children: React.ReactNode;
  setVisible: (visible: boolean) => void; // Rendre onPress optionnel
  className?: string;
}

export interface DialogContentProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: React.ReactNode;
  dialogBg?: string;
  closeMark?: boolean;
  container?: boolean;
}
//--------------------------------
