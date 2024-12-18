export type AddPartyScreenFormValues = {
  title: string;
  date: string;
  time: string;
  address: string;
  longitude: number;
  latitude: number;
  visibility: string;
};

export type EventProps = {
  id: number;
  title: string;
  party_pictures: string[];
  address: string;
  city: string;
  ticket_price: number;
  startDate: number;
  endDate: number;
};
