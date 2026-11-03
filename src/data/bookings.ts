export type Booking = {
  id: string;
  roomName: string;
  slot: string;
  purpose: string;
};

export const bookings: Booking[] = [
  {
    id: "bk01",
    roomName: "A201",
    slot: "08:00-09:00",
    purpose: "Team meeting",
  },
  {
    id: "bk02",
    roomName: "B202",
    slot: "14:00-15:00",
    purpose: "Project presentation",
  },
];
