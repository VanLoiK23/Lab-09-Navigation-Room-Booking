// Navigation contracts used in Week 9.
// You do NOT need to memorize this syntax yet.

export type RoomsStackParamList = {
  Rooms: undefined;
  RoomDetail: { roomId: string };
  BookingForm: {roomId: string};
};

export type MainTabParamList = {
  RoomsTab: undefined;
  MyBookings: undefined;
  AboutScreen: undefined;
};
