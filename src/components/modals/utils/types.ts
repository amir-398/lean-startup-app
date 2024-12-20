import { AddPartyScreenFormValues } from "@/utils/types";

export type CalendarsModalProps = {
  children: React.ReactNode;
  setCalendarValue: (value: any) => void;
  setHourModalVisible: (value: boolean) => void;
  type?: "single" | "range";
  defaultValues?:
    | {
        startDate: string;
        endDate: string;
      }
    | string;
};

export type TimePickerModalProps = {
  children: React.ReactNode;
  setFieldValue: (name: string, value: any) => void;
  setVisible: (value: boolean) => void;
  visible: boolean;
};

export interface MapModalProps {
  children: React.ReactNode;
  setFieldValue: (field: string, value: any) => void;
  values: AddPartyScreenFormValues;
  location?: boolean;
}

export interface SelectedAddress {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  name: string;
}
